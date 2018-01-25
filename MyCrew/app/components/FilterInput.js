import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Colors from '../utils/colors'
import Input from './Input'


const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 3,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  icon: {
    height: '100%',
    resizeMode: 'contain',
    tintColor: Colors.blackLight,

  },
  input: {
    backgroundColor: 'transparent',
    flexGrow: 1
  },
  inputText: {
    color: Colors.blackLight,
    textAlign: 'left'
  }
})

export default class FilterInput extends Component {
  render() {
    return (
      <View style={[Styles.container, this.props.style]}>
        <Image source={this.props.icon} style={Styles.icon} />
        <Input
          placeholder={this.props.placeholder}
          style={[Styles.input, this.props.inputStyle]}
          inputStyle={Styles.inputText}
          keyboardType={this.props.keyboardType} 
        />
      </View>
    )
  }
}
