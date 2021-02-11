import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Text>Página de Profile</Text>
      <Button title="Sair" onPress={() => signOut()}>
        <Text>Sair</Text>
      </Button>
    </View>
  );
}

export default Profile;