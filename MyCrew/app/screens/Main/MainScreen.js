import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import moment from 'moment'
import Realm from 'realm'
import Schema from '../../models/Schema'
import { setEvents } from '../../redux/mainActions'

import ButtonNavbar from '../../components/ButtonNavbar'
import CalloutEvent from '../../components/CalloutEvent'

import styles from './MainScreenStyles'
import menuStyles from '../../utils/MenuStyles'
import colors from '../../utils/colors'

import { connect } from 'react-redux'

import { changeModalFlag } from '../../redux/mainActions'

import uuidv4 from 'uuid/v4'

class MainScreen extends Component {

  componentDidMount() {
    Realm.open({schema: Schema})
    .then(realm => {
      const events = realm.objects('Event').map((event) => ({
        id: uuidv4(),
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
        <ButtonNavbar onPress={() => { navigation.navigate('AddEvent') }} icon={require('../../assets/iconAdd.png')} underlayColor={colors.purpleLight} />
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
            <Marker key={(uuidv4())}
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
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.main.events
  };
};

export default connect(mapStateToProps)(MainScreen);
