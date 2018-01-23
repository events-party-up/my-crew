import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableHighlight } from 'react-native'

import Styles from './EventsScreenStyles'

export default class EventsScreen extends Component {
  static navigationOptions = {
    // header: null
  }
  render() {
    return (
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.container}>
          
        </View>
      </ScrollView>
    )
  }
}
