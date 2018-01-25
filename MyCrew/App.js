import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStore from './app/redux/configureStore'
import Realm from 'realm'

import Event from './app/models/Event'
import Person from './app/models/Person'

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

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Stack />
      </Provider>
    )
  }
}

export default App
