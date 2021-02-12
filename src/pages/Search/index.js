import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { AreaInput, Container, Input, List } from './styles';

import Feather from 'react-native-vector-icons/Feather';

import firestore from '@react-native-firebase/firestore';

import SearchList from '../../components/SearchList';

function Search() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (input === '' || input === undefined) {
      setUsers([]);
      return;
    }

    const subscriber = firestore().collection('users')
      .where('name', '>=', input)
      .where('name', '<=', input + "\uf8ff")
      .onSnapshot(snapshot => {
        const listsUsers = [];

        snapshot.forEach(doc => {
          listsUsers.push({
            ...doc.data(),
            id: doc.id
          });
        });

        setUsers(listsUsers);
        console.log(listsUsers);
      })

      return () => subscriber();

  }, [input]);

  return (
    <Container>
      <AreaInput>
        <Feather name="search" color='#E52246' size={20} />
        <Input
          placeholder="Procurando alguém?"
          placeholderTextColor="#353840"
          value={input}
          onChangeText={text => setInput(text)}
        />
      </AreaInput>


      <List 
        showVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => <SearchList data={item} /> }
      />

    </Container>
  );
}

export default Search;