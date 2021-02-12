import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import {
  Avatar,
  Button, ButtonText, Container,
  Email, Name, UploadButton, UploadText
} from './styles';

import Header from '../../components/Header';

function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const [url, setUrl] = useState(null);
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
            <UploadButton>
              <UploadText>+</UploadText>
            </UploadButton>
          )
      }

      <Name numberOfLines={1}>{user.name}</Name>
      <Email numberOfLines={1}>{user.email}</Email>

      <Button bg="#428CFD">
        <ButtonText color="#FFF">Atualizar Perfil</ButtonText>
      </Button>

      <Button bg="#F1F1F1" onPress={() => signOut()}>
        <ButtonText color="#3B3B3B">Sair</ButtonText>
      </Button>
    </Container>
  );
}

export default Profile;