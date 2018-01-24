import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  icon: {
    tintColor: '#444444',
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 20
  },
  content: {
    color: '#444444',
    flexGrow: 1,
    justifyContent: 'center',
  }
})

const EventInfo = (props) => (
  <View style={[styles.container]}>
    <Image source={props.source} style={[styles.icon]} />
    <Text style={[styles.content]}>{props.content}</Text>
  </View>
)

export default EventInfo
