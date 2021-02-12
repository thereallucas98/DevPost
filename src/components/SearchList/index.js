import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Name } from './styles';

function SearchList({ data }) {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('PostsUsers',
        { title: data.name, userId: data.id })}>
      <Name>{data.name}</Name>
    </Container>
  );
}

export default SearchList;