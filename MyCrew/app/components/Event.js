import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

import colors from '../utils/colors'

import EventInfo from './EventInfo'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
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
  title: {
    color: colors.purple,
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center'
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
    backgroundColor: colors.purpleDark,
    marginRight: 5
  },
  buttonMap: {
    backgroundColor: colors.purpleLight,
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
    backgroundColor: colors.whiteIce,
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

export default class Event extends React.Component {
  onCancelPress = () => {

  }
  onMapPress = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <View style={[styles.circle, styles.circleLeft]}></View>
        </View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>Título do evento</Text>
          <EventInfo content="23/02/2018 - 16:00" source={require("../assets/iconCalendarEvent.png")} />
          <EventInfo content="Laboratório Bridge" source={require("../assets/iconMarker.png")} />
          <EventInfo content="R$ 5,00" source={require("../assets/iconMoney.png")} />
          <View style={styles.containerButtons}>
            <Button onPress={this.onCancelPress} text="Cancelar" style={[styles.button, styles.buttonCancel]} textStyle={styles.buttonText}/>
            <Button onPress={this.onMapPress} text="Ver no Mapa" style={[styles.button, styles.buttonMap]} textStyle={styles.buttonText}/>
          </View>
        </View>
        <View style={styles.containerRight}>
          <View style={[styles.circle, styles.circleRight]}></View>
        </View>
      </View>
    )
  }
}
