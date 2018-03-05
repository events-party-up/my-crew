import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native'

import Styles from './SignupScreenStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Colors from '../../utils/colors'
import { userIdKey, postSignup } from '../../utils/RestClient'

export default class SignupScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    }

    this.onRegisterPress = this.onRegisterPress.bind(this)
    this.onNameChangeText = this.onNameChangeText.bind(this)
    this.onLoginChangeText = this.onLoginChangeText.bind(this)
    this.onPasswordChangeText = this.onPasswordChangeText.bind(this)
    this.onPasswordConfirmChangeText = this.onPasswordConfirmChangeText.bind(this)
  }

  static navigationOptions = {
    header: null
  }

  onRegisterPress = async () => {
    if(this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0 && this.state.confirmPassword.length > 0) {
      if(this.state.password === this.state.confirmPassword) {
        this.setState({ error: "" })

        let result = await postSignup(this.state.name, this.state.email, this.state.password)

        if(result.error) {
          this.setState({ error: "This e-mail address is already registered" })
        } else {
          try {
            await AsyncStorage.setItem(userIdKey, `${result.userId}`)
            this.props.navigation.navigate('Main')
          } catch(error) {
            this.setState({ error: "Storage error, please retry" })
          }
        }

      } else {
          this.setState({ error: "Passwords don't match." })
      }
    } else {
      this.setState({ error: "Please fill in all fields!" })
    }
  }

  onLoginPress = () => {
    this.props.navigation.navigate('Login')
  }

  onNameChangeText = (name) => {
    this.setState({name})
    console.log(this.state)
  }

  onLoginChangeText = (email) => {
    this.setState({email})
    console.log(this.state)
  }

  onPasswordChangeText = (password) => {
    this.setState({password})
    console.log(this.state)
  }

  onPasswordConfirmChangeText = (confirmPassword) => {
    this.setState({confirmPassword})
    console.log(this.state)
  }

  render() {
    return (
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.container}>
          <Image source={require('../../assets/logo.png')} style={Styles.logo} />
          <View style={Styles.form}>
            <Input
              placeholder="Name"
              style={Styles.input}
              onChange={this.onNameChangeText}
            />
            <Input
              placeholder="E-mail"
              style={Styles.input}
              onChange={this.onLoginChangeText}
            />
            <Input
              placeholder="Password"
              style={Styles.input}
              secureTextEntry={true}
              onChange={this.onPasswordChangeText}
            />
            <Input
              placeholder="Repeat your Password"
              style={Styles.input}
              secureTextEntry={true}
              onChange={this.onPasswordConfirmChangeText}
            />
            <Button text="Register" style={Styles.buttonLogin} onPress={this.onRegisterPress} underlayColor={Colors.purpleLight}/>
            <Button text="Already have an account?" style={Styles.buttonSignup} onPress={this.onLoginPress} underlayColor="transparent" />
            {this.state.error.length > 0 && <Text style={Styles.errorFeedback}>{this.state.error}</Text>}
          </View>
          <Image source={require('../../assets/logoBridge.png')} style={Styles.logoBridge}/>
        </View>
      </ScrollView>
    )
  }
}
