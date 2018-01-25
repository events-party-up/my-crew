import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Colors from '../utils/colors'

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  icon: {
    tintColor: Colors.blackLight,
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 20
  },
  content: {
    color: Colors.blackLight,
    flexGrow: 1,
    justifyContent: 'center',
  }
})

const EventInfo = (props) => (
  <View style={[Styles.container]}>
    <Image source={props.source} style={[Styles.icon]} />
    <Text style={[Styles.content]}>{props.content}</Text>
  </View>
)

export default EventInfo
