import React, { Component } from 'react'
import { Text, View, Modal, Button } from 'react-native'
import Styles from './AddEventModalStyles'

import Colors from '../../utils/colors'
import Input from '../../components/Input'
import Title from '../../components/Title'
import ButtonX from '../../components/Button'

export default class AddEventModal extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true})
  }

  closeModal() {
    this.setState({modalVisible:false})
  }

  render() {
    return (
        <View>
          <Modal
              visible={this.state.modalVisible}
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
                <ButtonX text="Go!" style={Styles.buttonConfirm} underlayColor={Colors.purpleLight}/>
                <ButtonX text="Cancel" style={Styles.buttonCancel} onPress={() => this.closeModal()} underlayColor={Colors.purpleLight}/>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open"
          />
        </View>
    );
  }
}