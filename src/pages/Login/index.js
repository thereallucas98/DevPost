import React, { useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';

function Login() {
  const { signIn, signUp, loadingAuth } = useContext(AuthContext);

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    if (email === '' || password === '') {
      console.log('Preencha todos os campos!')
      return;
    }
    // Realizando o login
    signIn(email, password);
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      console.log('Preencha todos os campos!')
      return;
    }
    // Cadastrando um novo Usuário
    signUp(name, email, password);
  }

  if (login) {
    return (
      <Container>
        <Title>Dev
          <Text style={{ color: '#E52246' }}>Post</Text>
        </Title>

        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="usuario@email.com"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="********"
          secureTextEntry={true}
        />

        <Button>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
                <ButtonText onPress={handleLogin}>Acessar</ButtonText>
              )
          }
        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma Conta.</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Dev
          <Text style={{ color: '#E52246' }}>Post</Text>
      </Title>

      <Input
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Nome"
      />

      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="usuario@email.com"
      />
      <Input
        placeholder="********"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <Button onPress={handleSignUp}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
              <ButtonText onPress={handleSignUp}>Cadastrar</ButtonText>
            )
        }
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já tenho uma conta!</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default Login;