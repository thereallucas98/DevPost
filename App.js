import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import AuthProvider from './src/contexts/auth';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="#36393F"
          barStyle="light-content"
          transLucent={false}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;