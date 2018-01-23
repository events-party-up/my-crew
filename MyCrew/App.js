/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import LoginScreen from './app/screens/Login/LoginScreen'
import SignupScreen from './app/screens/Signup/SignupScreen'
import MainScreen from './app/screens/Main/MainScreen'

const Drawer = DrawerNavigator({
  Main: { screen: MainScreen }
});

const Stack = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen},
  Main: { screen: Drawer },
});

Drawer.navigationOptions = {
  title: 'MyCrewApp'
}

export default Stack
