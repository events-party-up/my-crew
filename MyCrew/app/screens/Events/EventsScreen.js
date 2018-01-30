import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import moment from 'moment'

import Styles from './EventsScreenStyles'
import Colors from '../../utils/colors'

import ButtonNavbar from '../../components/ButtonNavbar'
import Event from '../../components/Event'

import { setEvents } from '../../redux/mainActions'
import Realm from 'realm'
import Schema from '../../models/Schema'

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

  componentDidMount() {
    Realm.open({schema: Schema})
    .then(realm => {
      const events = realm.objects('Event').map((event) => ({
        title: event.name,
        description: event.description,
        date: moment(event.date, ["MM-DD-YYYY", "YYYY-MM-DD"]),
        local: event.locationName,
        price: event.price,
        type: event.type,
        openings: event.opnenings,
        latitude: event.latitude,
        longitude: event.longitude
      }))
      this.props.dispatch(setEvents(events))
    }).catch(error => {
      // implement user feedback - not connect to database
      console.log(error);
    });
  }

  render() {
    return (
      <View style={Styles.container}>
      {
        this.props.events.map((event) => (
          <Event key={uuidv4()}
            title={event.title}
            description={event.description}
            date={moment(event.date).format("DD/MM/YYYY")}
            local={event.local}
            price={event.price}
            isOwner={true}/>)
        )
      }
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