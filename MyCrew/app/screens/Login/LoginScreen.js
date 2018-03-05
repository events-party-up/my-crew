import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native'

import Styles from './LoginScreenStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Colors from '../../utils/colors'
import { userIdKey, postLogin } from '../../utils/RestClient'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      error: ""
    }

    this.onLoginChangeText = this.onLoginChangeText.bind(this)
    this.onPasswordChangeText = this.onPasswordChangeText.bind(this)
    this.onLoginPress = this.onLoginPress.bind(this)
  }

  onLoginChangeText = (email) => {
    this.setState({email})
  }

  onPasswordChangeText = (password) => {
    this.setState({password})
  }

  static navigationOptions = {
    header: null
  }
  onLoginPress = async () => {
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({ error: "" })
      let result = await postLogin(this.state.email, this.state.password)

      if(result.error) {
        this.setState({ error: "Wrong e-mail/password! Please retry" })
      } else {
        try {
          await AsyncStorage.setItem(userIdKey, `${result.userId}`)
          this.props.navigation.navigate('Main')
        } catch(error) {
          this.setState({ error: "Storage error, please retry" })
        }
      }

    } else {
      this.setState({ error: "Please fill in both fields!" })
    }
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
            <Input
              placeholder="E-mail" style={Styles.input}
              onChangeText={this.onLoginChangeText}
            />
            <Input
              placeholder="Password"
              style={Styles.input}
              secureTextEntry={true}
              onChangeText={this.onPasswordChangeText}
            />
            <Button text="Login" style={Styles.buttonLogin} onPress={this.onLoginPress} underlayColor={Colors.purpleLight}/>
            <Button text="Signup" style={Styles.buttonSignup} onPress={this.onSignupPress} underlayColor="transparent" />
            {this.state.error.length > 0 && <Text style={Styles.errorFeedback}>{this.state.error}</Text>}
          </View>
          <Image source={require('../../assets/logoBridge.png')} style={Styles.logoBridge}/>
        </View>
      </ScrollView>
    )
  }
}
