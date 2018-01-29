import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableHighlight } from 'react-native'

import Colors from '../../utils/colors'

import Styles from './ProfileScreenStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import CardView from '../../components/CardView'
import Title from '../../components/Title'

export default class ProfileScreen extends Component {
  static navigationOptions = ( { navigation }) => ({
    title: 'My Profile',
    headerStyle: {
      backgroundColor: Colors.whiteIce
    }
  })

  onUpdatePress = () => {

  }

  onPasswordPress = () => {

  }

  onDeletePress = () => {

  }

  render() {
    return (
      <ScrollView style={Styles.scrollView}>
        <CardView>
          <Title text="Profile Information" textStyle={Styles.title} />
          <Input style={Styles.input} placeholder="Your name" inputStyle={Styles.inputInner} />
          <Input style={Styles.input} placeholder="Your e-mail" inputStyle={Styles.inputInner} />
          <Input style={Styles.input} placeholder="Your phone number" inputStyle={Styles.inputInner} />
          <Button text="Update Profile" style={Styles.buttonProfile} textStyle={Styles.buttonText} onPress={this.onUpdatePress} />
        </CardView>
        <CardView>
          <Title text="Manage Password" textStyle={Styles.title} />
          <Input style={Styles.input} placeholder="Old password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Input style={Styles.input} placeholder="New password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Input style={Styles.input} placeholder="Confirm new password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Button text="Update Password" style={Styles.buttonPassword} textStyle={Styles.buttonText} onPress={this.onPasswordPress} />
        </CardView>
        <CardView>
          <Title text="Delete Account" textStyle={Styles.title} />
          <Text style={Styles.deleteDescription}>Keep in mind this is a non reversible action, all the events you created will be deleted along with your reservations.</Text>
          <Button text="Delete Anyway" style={Styles.buttonDelete} textStyle={Styles.buttonText} onPress={this.onDeletePress} />
        </CardView>
      </ScrollView>
    )
  }
}
