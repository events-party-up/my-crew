import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStore from './app/redux/configureStore'

import { Platform, StyleSheet, Text, View } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import ButtonNavbar from './app/components/ButtonNavbar'
import Colors from './app/utils/colors'

import DrawerMenu from './app/components/DrawerMenu'
import LoginScreen from './app/screens/Login/LoginScreen'
import SignupScreen from './app/screens/Signup/SignupScreen'
import MainScreen from './app/screens/Main/MainScreen'
import EventsScreen from './app/screens/Events/EventsScreen'
import AddEventScreen from './app/screens/Events/AddEventScreen'
import FilterScreen from './app/screens/Filters/FilterScreen'
import ProfileScreen from './app/screens/Profile/ProfileScreen'

const Drawer = DrawerNavigator({
  Main: { screen: MainScreen },
  Events: { screen: EventsScreen },
  AddEvent: { screen: AddEventScreen },
  Filters: { screen: FilterScreen },
  Profile: { screen: ProfileScreen }
}, {
  contentComponent: DrawerMenu,
});

const Stack = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen},
  Main: { screen: Drawer },
});

Drawer.navigationOptions = {
  title: 'MyCrewApp',
  headerStyle: {
    backgroundColor: Colors.whiteIce
  }
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
