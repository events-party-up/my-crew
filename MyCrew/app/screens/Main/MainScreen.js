import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native'
import MapView from 'react-native-maps'

import styles from './MainScreenStyles'
import menuStyles from '../../utils/MenuStyles'

export default class MainScreen extends Component {
  static navigationOptions = ( { navigation }) => ({
    title: 'MyCrewApp',
    headerLeft: <TouchableHighlight onPress={ () => { navigation.navigate('DrawerToggle') }}>
      <Image source={require('../../assets/iconMenu.png')} style={menuStyles.icon} />
    </TouchableHighlight>,
    headerRight: <View style={menuStyles.headerRightContainer}>
      <TouchableHighlight onPress={ () => { navigation.navigate('Filters') }} >
        <Image source={require('../../assets/iconFilter.png')} style={menuStyles.icon} />
      </TouchableHighlight>
      <TouchableHighlight >
        <Image source={require('../../assets/iconAdd.png')} style={menuStyles.icon} />
      </TouchableHighlight>
    </View>
  })
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}
