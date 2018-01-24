import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

import Colors from '../utils/colors'

const styles = StyleSheet.create({
  title: {
    color: Colors.purple,
    fontSize: 20,
    fontWeight: '300',
    marginTop: 20,
    textAlign: 'center'
  }
})

export default class Title extends React.Component {
  render() {
    return (
      <Text style={[styles.title, this.props.textStyle]}>
        {this.props.text}
      </Text>
    )
  }
}