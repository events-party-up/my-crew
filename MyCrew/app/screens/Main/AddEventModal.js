import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import Styles from './AddEventModalStyles'

import Colors from '../../utils/colors'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Button from '../../components/Button'

export default class AddEventModal extends Component {


  render() {
    return (
        <View>
          <Modal
              visible={this.props.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={true}
          >
            <View style={Styles.container}>
              <View style={Styles.form}>
                <Title text="Create an event" />
                <Input placeholder="Name" style={Styles.input}/>
                <Input placeholder="Type" style={Styles.input}/>
                <Input placeholder="Place" style={Styles.input}/>
                <Input placeholder="Number of slots" style={Styles.input}/>
                <Input placeholder="Date" style={Styles.input}/>
                <Input placeholder="Price" style={Styles.input}/>
                <Button text="Go!" style={Styles.buttonConfirm} onPress={this.props.closeModal} underlayColor={Colors.purpleLight}/>
                <Button text="Cancel" style={Styles.buttonCancel} onPress={this.props.closeModal} underlayColor={Colors.purpleLight}/>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}