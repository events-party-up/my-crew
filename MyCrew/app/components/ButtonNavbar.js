import React, { Component } from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native'

import Colors from '../utils/colors'
import MenuStyles from '../utils/MenuStyles'

export default class ButtonNavbar extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor={this.props.underlayColor} >
        <Image source={this.props.icon} style={MenuStyles.icon} />
      </TouchableHighlight>
    )
  }
}
