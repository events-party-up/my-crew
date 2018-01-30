import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
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

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.props.events}
          renderItem={ ({item}) => (
            <Event
              title={item.title}
              description={item.description}
              date={moment(item.date).format("DD/MM/YYYY")}
              local={item.local}
              price={item.price}
              isOwner={true}/>
          )}
        />

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
