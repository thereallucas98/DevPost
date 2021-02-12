import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { View, Text } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Actions, Avatar,
  Container, Content, ContentView,
  Header, Like, LikeButton, Name, TimePost
} from './styles';

function PostsList({ data, userId }) {
  const navigation = useNavigation();

  function formatTimePost() {
    // console.log(data.created)

    // Converter timestamp para Data
    const datePost = new Date(data.created.seconds * 1000);
    // console.log(datePost)

    return formatDistance(
      new Date(),
      datePost,
      {
        locale: ptBR
      }
    )
  }

  async function likePost(id, likes) {
    const docId = `${userId}_${id}`;

    //Checar se o post já foi curtido
    const doc = await firestore().collection('likes')
      .doc(docId).get();

    if (doc.exists) {
      //Quer dizer que ele já curtiu esse post
      await firestore().collection('posts')
        .doc(id).update({
          likes: likes - 1
        })

      await firestore().collection('likes')
        .doc(docId).delete();
      return;
    }

    //Criar o like dele no post
    await firestore().collection('likes')
      .doc(docId).set({
        postId: id,
        userId: userId,
      })

    //Somar + 1 like no post
    await firestore().collection('posts')
      .doc(id).update({
        likes: likes + 1
      });

  }

  return (
    <Container>
      <Header onPress={() => navigation.navigate('PostsUsers', {title: data.author, userId: data.userId})}>
        {
          data.avatarUrl ? (
            <Avatar
              source={{ uri: data.avatarUrl }}
            />
          ) : (
              <Avatar
                source={require('../../assets/avatar.png')}
              />
            )
        }

        <Name>{data?.author}</Name>
      </Header>

      <ContentView>
        <Content>{data.content}</Content>
      </ContentView>

      <Actions>
        <LikeButton onPress={() => likePost(data.id, data.likes)}>
          <Like>
            {data.likes === 0 ? '' : data?.likes}
          </Like>
          <Material
            name={data?.likes === 0 ? 'heart-plus-outline' : 'cards-heart'}
            size={20}
            color="#E52246"
          />
        </LikeButton>

        <TimePost>
          {formatTimePost()}
        </TimePost>

      </Actions>
    </Container>
  );
}

export default PostsList;