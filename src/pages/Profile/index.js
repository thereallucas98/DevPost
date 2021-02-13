import React, { useContext, useState, useEffect } from 'react';
import { Platform, Modal } from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


import { AuthContext } from '../../contexts/auth';
import {
  Avatar,
  Button, ButtonGoBack, ButtonText, Container,
  Email, Input,
  ModalContainer, Name, UploadButton, UploadText
} from './styles';

import Header from '../../components/Header';

function Profile() {
  const { user, signOut, storageUser, setUser } = useContext(AuthContext);

  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.name);

  useEffect(() => {
    async function load() {
      try {
        let response = await storage().ref('users').child(user?.uid).getDownloadURL();
        console.log(response);
        setUrl(response);

      } catch {
        console.log('Nenhuma foto foi encontrada!')
      }
    }
    load();

  }, []);

  // Update Profile Name
  async function updateProfile() {
    if (name === '') {
      return;
    }

    await firestore().collection('users').doc(user.uid).update({
      name: name,
    })

    const postsDocs = await firestore().collection('posts').where('userId', '==', user.uid).get();

    postsDocs.forEach(async doc => {
      await firestore().collection('posts').doc(doc.id).update({
        author: name,
      })
    })

    let data = {
      uid: user.uid,
      name: name,
      email: user.email
    }

    storageUser(data);
    setUser(data);
    setOpen(false);
  }

  const uploadFile = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Cancelou a operação!')
      } else if (response.error) {
        console.log('Parece que deu algum erro: ' + response.error)
      } else {
        uploadFileFirebase(response).then(() => {
          console.log('oi');
          uploadAvatarPosts();
        })

        setUrl(response.uri);
      }
    })
  }

  const getFileLocalePath = response => {
    const { path, uri } = response;
    // console.log(response)

    return Platform.OS === 'ios' ? path : uri;
  }
  const uploadFileFirebase = async response => {
    // console.log(response)
    const fileSource = getFileLocalePath(response)
    // console.log(fileSource)
    const storageRef = storage().ref('users').child(user?.uid);

    return await storageRef.putFile(fileSource)

  };

  async function uploadAvatarPosts() {
    const storageRef = storage().ref('users').child(user?.uid);

    const url = await storageRef.getDownloadURL()
    .then(async image => {
      // Atualizar os avatar do Users no POSTS
      const postsDocs = await firestore().collection('posts').where('userId', '==', user.uid).get();

      postsDocs.forEach(async doc => {
        await firestore().collection('posts').doc(doc.id).update({
          avatarUrl: image,
        })
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Container>
      <Header />
      {
        url ?
          (
            <UploadButton>
              <UploadText>+</UploadText>
              <Avatar
                source={{ uri: url }}
              />
            </UploadButton>
          ) :
          (
            <UploadButton onPress={uploadFile}>
              <UploadText>+</UploadText>
            </UploadButton>
          )
      }

      <Name numberOfLines={1}>{user.name}</Name>
      <Email numberOfLines={1}>{user.email}</Email>

      <Button bg="#428CFD" onPress={() => setOpen(true)}>
        <ButtonText color="#FFF">Atualizar Perfil</ButtonText>
      </Button>

      <Button bg="#F1F1F1" onPress={() => signOut()}>
        <ButtonText color="#3B3B3B">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        {/* <ModalContainer behavior={ Plataform.OS === 'android' ? '' : 'padding' } > */}
        <ModalContainer>
          <ButtonGoBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left" size={22} color="#121212" />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonGoBack>

          <Input
            placeholder={user?.name}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Button bg="#428CFD" onPress={updateProfile}>
            <ButtonText color="#FFF">Atualizar</ButtonText>
          </Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Profile;