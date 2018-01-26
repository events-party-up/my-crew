import React, { Component } from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

import Colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 3,
    padding: 10,
    width: '100%'
  },
  text: {
    fontWeight: '700',
    textAlign: 'center'
  }
})

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={[styles.container, this.props.style]} underlayColor={this.props.underlayColor}>
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}
