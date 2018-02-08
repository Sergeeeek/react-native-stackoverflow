import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import { LoginContainer } from "./screens/Auth/LoginContainer";
import HomeView from './screens/Home/HomeView';

const AppNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
  },
  Home: {
    screen: HomeView,
  },
},
{
  headerMode: "none",
});

export default AppNavigator;