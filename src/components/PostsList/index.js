import React from 'react';
import { View, Text } from 'react-native';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import { Actions, Avatar,
  Container, Content, ContentView, 
  Header, Like, LikeButton, Name, TimePost } from './styles';

function PostsList({ data, userId }) {
  return (
    <Container>
      <Header>
        <Avatar
          source={require('../../assets/avatar.png')}
        />
        <Name>Lucas</Name>
      </Header>

      <ContentView>
        <Content>Este é o meu primeiro post aqui na plataforma...</Content>
      </ContentView>

      <Actions>
        <LikeButton>
          <Like>60</Like>
          <Material name="heart-plus-outline" size={20} color="#E52246" />
        </LikeButton>

        <TimePost>
          há 10 minutos
        </TimePost>

      </Actions>
    </Container>
  );
}

export default PostsList;