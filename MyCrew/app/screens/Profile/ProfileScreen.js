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

  render() {
    return (
      <ScrollView style={Styles.scrollView}>
        <CardView>
          <Title text="Profile Information" textStyle={Styles.title} />
          <Input style={Styles.input} placeholder="Your name" inputStyle={Styles.inputInner} />
          <Input style={Styles.input} placeholder="Your e-mail" inputStyle={Styles.inputInner} />
          <Input style={Styles.input} placeholder="Your phone number" inputStyle={Styles.inputInner} />
          <Button text="UPDATE PROFILE" style={Styles.buttonProfile} textStyle={Styles.buttonText} />
        </CardView>
        <CardView>
          <Title text="Manage Password" textStyle={Styles.title} />
          <Input style={Styles.input} placeholder="Old password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Input style={Styles.input} placeholder="New password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Input style={Styles.input} placeholder="Confirm new password" inputStyle={Styles.inputInner} secureTextEntry={true} />
          <Button text="UPDATE PASSWORD" style={Styles.buttonPassword} textStyle={Styles.buttonText} />
        </CardView>
      </ScrollView>
    )
  }
}
