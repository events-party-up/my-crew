import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

import Colors from '../utils/colors'

import EventInfo from './EventInfo'
import Button from './Button'
import Title from './Title'
import EventEditModal from './EventEditModal'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%'
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCenter: {
    flex: 18,
    padding: 10
  },
  containerTitle: {
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
    marginTop: 0,
    paddingBottom: 10,
    textAlign: 'center'
  },
  buttonAdmin: {
    flex: 1,
    height: '100%',
    marginTop: 5,
    padding: 0
  },
  buttonAdminText: {
    backgroundColor: Colors.red,
    color: 'white',
    fontWeight: '700',
  },
  description: {
    color: Colors.purpleLight,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'justify'
  },
  containerButtons: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    borderRadius: 50,
    flex: 1
  },
  buttonCancel: {
    backgroundColor: Colors.purpleDark,
    marginRight: 5
  },
  buttonMap: {
    backgroundColor: Colors.purpleLight,
    marginLeft: 5
  },
  buttonText: {
    color: 'white'
  },
  containerRight: {
    flex: 1,
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: Colors.whiteIce,
    borderRadius: 60/2,
    height: 30,
    width: 30
  },
  circleLeft: {
    alignSelf: 'flex-end',
  },
  circleRight: {
    alignSelf: 'flex-start'
  }
})

export default class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false
    }
  }
  onEditPress = () => {
    this.setState((prevState) => ({ modalVisible: !prevState.modalVisible }));
  }
  onCancelPress = () => {

  }
  onMapPress = () => {

  }
  closeModal = () => {
    this.setState(() => ({ modalVisible: false }))
  }
  render() {
    return (
      <View style={styles.container}>
        <EventEditModal
          modalVisible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        />
        <View style={styles.containerLeft}>
          <View style={[styles.circle, styles.circleLeft]}></View>
        </View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{this.props.title}</Text>
          <EventInfo content={this.props.date} source={require("../assets/iconCalendarEvent.png")} />
          <EventInfo content={this.props.local}source={require("../assets/iconMarker.png")} />
          <EventInfo content={this.props.price} source={require("../assets/iconMoney.png")} />
          <View style={styles.containerButtons}>
            <Button onPress={this.onCancelPress} text="Delete" style={[styles.button, styles.buttonCancel]} textStyle={styles.buttonText}/>
            <Button onPress={this.onMapPress} text="View on Map" style={[styles.button, styles.buttonMap]} textStyle={styles.buttonText}/>
          </View>
        </View>
        <View style={styles.containerRight}>
          <View style={[styles.circle, styles.circleRight]}></View>
        </View>
      </View>
    )
  }
}
