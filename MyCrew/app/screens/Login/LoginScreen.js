import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableHighlight } from 'react-native'

import Styles from './LoginScreenStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Colors from '../../utils/colors'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  onLoginPress = () => {
    this.props.navigation.navigate('Main')
  }
  onSignupPress = () => {
    this.props.navigation.navigate('Signup')
  }
  render() {
    return (
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.container}>
          <Image source={require('../../assets/logo.png')} style={Styles.logo} />
          <View style={Styles.form}>
            <Input placeholder="E-mail" style={Styles.input}/>
            <Input placeholder="Password" style={Styles.input} secureTextEntry={true}/>
            <Button text="Login" style={Styles.buttonLogin} onPress={this.onLoginPress} underlayColor={Colors.purpleLight}/>
            <Button text="Signup" style={Styles.buttonSignup} onPress={this.onSignupPress} underlayColor="transparent" />
          </View>
          <Image source={require('../../assets/logoBridge.png')} style={Styles.logoBridge}/>
        </View>
      </ScrollView>
    )
  }
}
