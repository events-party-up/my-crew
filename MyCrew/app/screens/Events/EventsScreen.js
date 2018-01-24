import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import Styles from './EventsScreenStyles'
import colors from '../../utils/colors'

import Event from '../../components/Event'

export default class EventsScreen extends Component {
  static navigationOptions = {
    title: 'Your Events',
    headerStyle: {
      backgroundColor: colors.grey
    },
  }
  render() {
    return (
      <View style={Styles.container}>
        <Event title="Munchkin"/>
      </View>
    )
  }
}
