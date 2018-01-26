import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Styles from './EventsScreenStyles'
import Colors from '../../utils/colors'

import ButtonNavbar from '../../components/ButtonNavbar'
import Event from '../../components/Event'

class EventsScreen extends Component {
  static navigationOptions = ( { navigation }) => ({
    title: 'Your Events',
    headerStyle: {
      backgroundColor: Colors.grey
    },
    headerLeft: (
      <ButtonNavbar onPress={() => { navigation.goBack() }} icon={require('../../assets/iconBack.png')} underlayColor={Colors.purpleLight} />
    ),
  })
  render() {
    return (
      <View style={Styles.container}>
        <Event title="Munchkin" isOwner={true} />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.main.events
  };
};

export default connect(mapStateToProps)(EventsScreen)