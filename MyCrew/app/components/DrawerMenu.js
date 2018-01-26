import React, { Component } from 'react'
import { NavigationActions, DrawerItems, SafeAreaView } from 'react-navigation'
import { TouchableHighlight, ScrollView, Text, View, Image, StyleSheet } from 'react-native'

import Colors from '../utils/colors'
import DrawerMenuItem from './DrawerMenuItem'

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.purpleDark
  },
  header: {
    backgroundColor: Colors.whiteIce,
    height: 100,
    padding: 10
  },
  logo: {
    alignSelf: 'center',
    height: '100%',
    resizeMode: 'contain'
  },
  footer: {
    backgroundColor: Colors.purpleLight
  }
})

export default class DrawerMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.scrollView}>
          <SafeAreaView>
            <View style={Styles.header}>
              <Image source={require('../assets/logo.png')} style={Styles.logo} />
            </View>
            <DrawerMenuItem text="Home" image={require('../assets/iconMap.png')} onPress={this.navigateToScreen('Main')} />
            <DrawerMenuItem text="My Events" image={require('../assets/iconActivity.png')} onPress={this.navigateToScreen('Events')} />
            <DrawerMenuItem text="Manage Profile" image={require('../assets/iconAccount.png')} onPress={this.navigateToScreen('Profile')} />
            <DrawerMenuItem text="About Us" image={require('../assets/iconBusiness.png')} onPress={this.navigateToScreen('About')} />
          </SafeAreaView>
        </ScrollView>
        <View style={Styles.footer}>
          <DrawerMenuItem text="Logout" image={require('../assets/iconExit.png')} onPress={this.navigateToScreen('Login')} />
        </View>
      </View>
    )
  }
}
