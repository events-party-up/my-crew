import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import Colors from '../../utils/colors'
import Styles from './FilterScreenStyles'

import ButtonNavbar from '../../components/ButtonNavbar'
import FilterInput from '../../components/FilterInput'

export default class FilterScreen extends Component {

  static navigationOptions = ( { navigation }) => ({
    title: 'Map',
    headerStyle: {
      backgroundColor: Colors.grey
    },
    headerLeft: (
      <ButtonNavbar onPress={() => { navigation.goBack() }} icon={require('../../assets/iconBack.png')} underlayColor={Colors.purpleLight} />
    ),
    headerRight: (
      <ButtonNavbar onPress={() => { navigation.navigate('Main') }} icon={require('../../assets/iconCheck.png')} underlayColor={Colors.purpleLight} />
    )
  })
  render() {
    return (
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.container}>
          <FilterInput placeholder="Activity Name" style={Styles.input} icon={require('../../assets/iconSearch.png')} />
          <FilterInput placeholder="Activity Type" style={Styles.input} icon={require('../../assets/iconActivity.png')} />
          <FilterInput placeholder="Place" style={Styles.input} icon={require('../../assets/iconMarker.png')} />
          <FilterInput placeholder="Min Price" style={Styles.input} icon={require('../../assets/iconMoney.png')} keyboardType="numeric" />
          <FilterInput placeholder="Max Price" style={Styles.input} icon={require('../../assets/iconMoney.png')} keyboardType="numeric" />
          <FilterInput placeholder="Number of openings" style={Styles.input} icon={require('../../assets/iconList.png')} keyboardType="numeric" />
        </View>
      </ScrollView>
    )
  }
}
