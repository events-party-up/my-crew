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

import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screens/Login/LoginScreen.js'
import MainScreen from './app/screens/Main/MainScreen.js'

const Navigation = StackNavigator({
  Main: { screen: MainScreen }
  // Login: { screen: LoginScreen }
});

export default Navigation;
