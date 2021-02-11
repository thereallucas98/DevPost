import React, { useState, useLayoutEffect, useContext } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../../contexts/auth';

import { Container, Input, Button, ButtonText } from './styles';

function NewPost() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState('');

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>
            Compartilhar
          </ButtonText>
        </Button>
      )
    })
  }, [navigation, post]);

  async function handlePost() {
    if (post === '') {
      console.log('Seu post contém conteúdo inválido');
      return;
    }

    let avatarUrl = null;

    try {
      let response = await storage().ref('users')
      .child(user?.uid).getDownloadURL();

      avatarUrl = response;
    } catch(error) {
      avatarUrl = null;
    }

    await firestore().collection('posts')
    .add({
      author: user.name,
      avatarUrl,
      content: post,
      created: new Date(),
      likes: 0,
      userId: user.uid,
    })
    .then(() => {
      setPost('');
      console.log('Post criado com sucesso!');
    })
    .catch((error) => {
      console.log(error);
    })

    navigation.goBack();

  }

  return (
    <Container>
      <Input
        placeholder="O que está acontecendo?"
        placeholderTextColor="#DDD"
        multiline={true}
        maxLength={300}
        value={post}
        onChangeText={text => setPost(text)}
        autoCorrect={false}
      />
    </Container>
  );
}

export default NewPost;