/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

import LoginScreen from './app/screens/Login/LoginScreen.js'
import MainScreen from './app/screens/Main/MainScreen.js'

const Drawer = DrawerNavigator({
  Main: { screen: MainScreen }
});

const Stack = StackNavigator({
  Main: { screen: Drawer }
  // Login: { screen: LoginScreen }
});

Drawer.navigationOptions = {
  title: 'MyCrewApp'
}

export default Stack;
