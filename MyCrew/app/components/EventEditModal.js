import React, { Component } from 'react'
import { View, Text, ScrollView, Modal, TouchableHighlight, StyleSheet } from 'react-native'

import Title from './Title'
import Input from './Input'
import Button from './Button'

import Colors from '../utils/colors'

const Styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.whiteIce,
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    flex: 1
  },
  title: {
    marginBottom: 20
  },
  input: {
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonUpdate: {
    alignSelf: 'center',
    backgroundColor: Colors.purpleLight,
    marginTop: 30,
    width: '50%'
  },
  buttonCancel: {
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    marginTop: 10,
    width: '50%'
  }
})

export default class EventEditModal extends Component {
  render() {
    return (
      <Modal
          visible={this.props.modalVisible}
          animationType={'slide'}
          onRequestClose={this.props.onRequestClose}
          transparent={true}
      >
        <ScrollView style={Styles.scrollView}>
          <View>
            <Title text="Update Event Info" textStyle={Styles.title} />
            <Input placeholder="Event name" style={Styles.input} />
            <Input placeholder="Event description" style={Styles.input} />
            <Input placeholder="Event type" style={Styles.input} />
            <Input placeholder="Event place" style={Styles.input} />
            <Input placeholder="Event price" style={Styles.input} />
            <Input placeholder="Event openings" style={Styles.input} />
            <Input placeholder="Event date" style={Styles.input} />


            <Button text="Update" onPress={this.props.onUpdatePress} style={Styles.buttonUpdate} />
            <Button text="Cancel" onPress={this.props.onRequestClose} style={Styles.buttonCancel} />
          </View>
        </ScrollView>
      </Modal>
    )
  }
}
