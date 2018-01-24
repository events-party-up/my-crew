import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native'
import MapView from 'react-native-maps'

import AddEventModal from './AddEventModal'
import ButtonNavbar from '../../components/ButtonNavbar'

import styles from './MainScreenStyles'
import menuStyles from '../../utils/MenuStyles'
import colors from '../../utils/colors'


export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalVisible: true})
  }

  closeModal() {
    this.setState({modalVisible: false})
  }

  componentDidMount() {
    this.props.navigation.setParams({ modal: this.openModal.bind(this) })
  }

  static navigationOptions = ( { navigation }) => ({
    title: 'Map',
    headerStyle: {
      backgroundColor: colors.grey
    },
    headerLeft: (
      <ButtonNavbar onPress={() => { navigation.navigate('DrawerToggle') }} icon={require('../../assets/iconMenu.png')} underlayColor={colors.purpleLight} />
    ),
    headerRight: (
      <View style={menuStyles.headerRightContainer}>
        <ButtonNavbar onPress={() => { navigation.navigate('Filters') }} icon={require('../../assets/iconFilter.png')} underlayColor={colors.purpleLight} />
        <ButtonNavbar onPress={() => navigation.state.params.modal()} icon={require('../../assets/iconAdd.png')} underlayColor={colors.purpleLight} />
      </View>
    )
  })
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <AddEventModal closeModal={this.closeModal} modalVisible={this.state.modalVisible}/>
      </View>
    )
  }
}
