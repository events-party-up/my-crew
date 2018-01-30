import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import moment from 'moment'
import Realm from 'realm'
import Schema from '../../models/Schema'
import { setEvents } from '../../redux/mainActions'

import AddEventModal from './AddEventModal'
import ButtonNavbar from '../../components/ButtonNavbar'
import CalloutEvent from '../../components/CalloutEvent'

import styles from './MainScreenStyles'
import menuStyles from '../../utils/MenuStyles'
import colors from '../../utils/colors'

import { connect } from 'react-redux';

import { changeModalFlag } from '../../redux/mainActions'

import uuidv4 from 'uuid/v4'

class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.props.dispatch(changeModalFlag(true))
  }

  closeModal() {
    this.props.dispatch(changeModalFlag(false))
  }

  componentDidMount() {
    this.props.navigation.setParams({ modal: this.openModal.bind(this)})
    Realm.open({schema: Schema})
    .then(realm => {
      const events = realm.objects('Event').map((event) => ({
        title: event.name,
        description: event.description,
        date: moment(event.date, ["MM-DD-YYYY", "YYYY-MM-DD"]),
        local: event.locationName,
        price: event.price,
        type: event.type,
        openings: event.openings,
        latitude: event.latitude,
        longitude: event.longitude
      }))
      this.props.dispatch(setEvents(events))
    }).catch(error => {
      // implement user feedback - not connect to database
      console.log(error);
    });
  }

  static navigationOptions = ( { navigation }) => ({
    title: 'Map',
    headerStyle: {
      backgroundColor: colors.whiteIce
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
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.props.events.map(event => (
            <Marker key={(uuidv4())} //use a uuid lib
              coordinate={{
                latitude: event.latitude,
                longitude: event.longitude
              }}
            >
              <Callout >
                <CalloutEvent event={event} />
              </Callout>
            </Marker>
          ))}
        </MapView>
        <AddEventModal closeModal={this.closeModal} modalVisible={this.props.isModalOpen}/>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.main.events,
    isModalOpen: state.main.isModalOpen
  };
};

export default connect(mapStateToProps)(MainScreen);
