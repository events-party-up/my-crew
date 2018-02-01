import React, { Component } from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'

import Colors from '../utils/colors'

import Title from './Title'
import EventInfo from './EventInfo'
import Button from './Button'

const {width} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 50
  },
  description: {
    color: Colors.purpleDark,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
    width: '90%'
  },
  buttonText: {
    color: 'white'
  },
  buttonPositive: {
    backgroundColor: 'green',
  },
  buttonNegative: {
    backgroundColor: Colors.red,
  }
})

export default class CalloutEvent extends Component {
  onSignupPress = () => {
    //Action to enroll the user into this event!
  }

  render() {
    return (
      <View style={Styles.container}>
        <Title style={Styles.title} text={this.props.event.title} />
        <Text style={Styles.description}>{this.props.event.description}</Text>
        {/* <EventInfo content={this.props.event.date.toString()} source={require("../assets/iconCalendarEvent.png")} /> */}
        <EventInfo content={this.props.event.local} source={require("../assets/iconMarker.png")} style={Styles.info} />
        <EventInfo content={this.props.event.price} source={require("../assets/iconMoney.png")} style={Styles.info} />
        {/* TODO think of a way to handle when user is also the owner of the event */}
        <Button
          text={ this.props.event.openings > 0 ? `${this.props.event.openings} openings, Signup Now!` : "Sorry, this event is full :(" }
          style={this.props.event.openings > 0 ? [Styles.button, Styles.buttonPositive] : [Styles.button, Styles.buttonNegative] }
          textStyle={Styles.buttonText}
          onPress={this.onSignupPress}
        />
      </View>
    )
  }
}
