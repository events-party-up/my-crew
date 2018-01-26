import React, { Component } from 'react'
import { TouchableHighlight, Text, View, Image, StyleSheet } from 'react-native'

import Colors from '../utils/colors'

const Styles = StyleSheet.create({
  touchable: {
    borderColor: Colors.whiteIce,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2
  },
  container: {
    flexDirection: 'row'
  },
  image: {
    tintColor: Colors.whiteIce,
    height: 50,
    resizeMode: 'contain'
  },
  text: {
    alignSelf: 'center',
    color: Colors.whiteIce,
    fontSize: 16,
    marginLeft: 10
  }
})

export default class DrawerMenuItem extends Component {
  render() {
    return (
      <TouchableHighlight style={Styles.touchable} onPress={this.props.onPress} underlayColor={Colors.purpleLight} >
        <View style={Styles.container}>
          <Image style={Styles.image} source={this.props.image} />
          <Text style={Styles.text}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
