import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableHighlight } from 'react-native'

import Styles from './SignupScreenStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Colors from '../../utils/colors'

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  }

  onSignupPress = () => {
    this.props.navigation.navigate('Login')
  }

  onRegisterPress = () => {
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.container}>
          <Image source={require('../../assets/logo.png')} style={Styles.logo} />
          <View style={Styles.form}>
            <Input placeholder="Name" style={Styles.input}/>
            <Input placeholder="E-mail" style={Styles.input}/>
            <Input placeholder="Password" style={Styles.input} secureTextEntry={true}/>
            <Input placeholder="Repeat your Password" style={Styles.input} secureTextEntry={true}/>
            <Button text="Register" style={Styles.buttonLogin} onPress={this.onRegisterPress} underlayColor={Colors.purpleLight}/>
            <Button text="Already have an account?" style={Styles.buttonSignup} onPress={this.onSignupPress} underlayColor="transparent" />
          </View>
          <Image source={require('../../assets/logoBridge.png')} style={Styles.logoBridge}/>
        </View>
      </ScrollView>
    )
  }
}
