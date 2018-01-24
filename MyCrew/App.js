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
import EventsScreen from './app/screens/Events/EventsScreen'
import FilterScreen from './app/screens/Filters/FilterScreen'

const Drawer = DrawerNavigator({
  Main: { screen: MainScreen },
  Events: { screen: EventsScreen },
  Filters: { screen: FilterScreen }
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
