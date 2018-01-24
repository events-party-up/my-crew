import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'
import MapView from 'react-native-maps'

import styles from './MainScreenStyles'
import AddEventModal from './AddEventModal'

export default class MainScreen extends Component {
  static navigationOptions = ( { navigation }) => ({
    title: 'MyCrewApp',
    headerLeft: <Button
      title="oi"
      onPress={ () => {
        navigation.navigate('DrawerToggle', {title: 'idapsd'});
      }}
    />
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
