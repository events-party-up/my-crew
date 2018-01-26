import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    padding: 8
  }
})

const CardView = (props) => (
  <View style={Styles.container}>
    {props.children}
  </View>
)


export default CardView
