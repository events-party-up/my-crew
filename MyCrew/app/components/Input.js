import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 3,
    color: Colors.blackLight,
    padding: 5,
    textAlign: 'center',
  }
})

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          underlineColorAndroid='transparent'
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          style={[styles.input, this.props.inputStyle]}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
          onBlur={this.props.onBlur}
        />
      </View>
    )
  }
}
