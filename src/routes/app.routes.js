import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import PostsUser from '../pages/PostsUser';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#36393F',
          }
        }}
      />
      <Stack.Screen
        name="PostsUsers"
        component={PostsUser}
        options={{
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#36393F',
          }
        }}
      />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: '#202225',
          borderTopWidth: 0,
        },
        activeTintColor: '#FFF',
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="search" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;