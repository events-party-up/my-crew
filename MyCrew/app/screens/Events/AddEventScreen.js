import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

// change styles file here!!!
import Styles from './EventsScreenStyles'
import Colors from '../../utils/colors'

import ButtonNavbar from '../../components/ButtonNavbar'
import Event from '../../components/Event'

import { setEvents } from '../../redux/mainActions'
import Realm from 'realm'
import Schema from '../../models/Schema'

import Input from '../../components/Input'
import Title from '../../components/Title'
import Button from '../../components/Button'

import moment from 'moment';
import RNGooglePlaces from 'react-native-google-places'

export default class AddEventScreen extends Component {
  static navigationOptions = ( { navigation }) => ({
    title: 'Your Events',
    headerStyle: {
      backgroundColor: Colors.grey
    },

    headerLeft: (
      <ButtonNavbar onPress={() => { navigation.goBack() }} icon={require('../../assets/iconBack.png')} underlayColor={Colors.purpleLight} />
    ),
  })

  constructor(props) {
    super(props)
    console.log(Realm.defaultPath)
    this.onCreateEvent = this.onCreateEvent.bind(this)
    this.openSearchModal = this.openSearchModal.bind(this)
    this.state = {
      name: '',
      description: '',
      type: '',
      locationName: 'Your place',
      slotsMin: 1,
      slotsMax: 1,
      latitude: 0,
      longitude: 0,
      date: undefined,
      price: 0
    }
  }

  onCreateEvent() {
    Realm.open({schema: Schema})
      .then(realm => {
        realm.write(() => {
          const event = realm.create('Event', {
            locationName: this.state.locationName,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            name: this.state.name,
            description: this.state.description,
            date: moment(this.state.date, 'DD-MM-YYYY').toDate(),
            slotsMin: parseInt(this.state.slotsMin),
            slotsMax: parseInt(this.state.slotsMax),
            price: parseInt(this.state.price),
          });
        })

        this.props.dispatch(saveEvent({
          locationName: this.state.locationName,
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          name: this.state.name,
          description: this.state.description,
          date: moment(this.state.date, 'DD-MM-YYYY').toDate(),
          slotsMin: this.state.slotsMin,
          slotsMax: this.state.slotsMax,
          price: this.state.price
        }))

        //make call to confirm message
        // navigation.goBack()

      }).catch(error => {
        // implement user feedback - not connect to database
        console.log(error);
      });

  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal().then((place) => {
      this.setState({
        locationName: place.name,
        latitude: place.latitude,
        longitude: place.longitude
      })
    }).catch(error => {
      console.log('Error trying to fetch place', error)
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.form}>
            <Title text="Create an event" />
            <Button text="Search place" style={Styles.buttonSearchPlace} onPress={this.openSearchModal} underlayColor={Colors.purpleLight}/>
            <Text>{this.state.locationName}</Text>
            <Input onChangeText={(text) => this.setState({ name: text })} placeholder="Game" style={Styles.input}/>
            <Input onChangeText={(text) => this.setState({ description: text })} placeholder="Description" style={Styles.input}/>
            <Input onChangeText={(text) => this.setState({ date: text })} placeholder="Date and hour" style={Styles.input}/>
            <Input onChangeText={(text) => this.setState({ slotsMin: text })} placeholder="Min size" style={Styles.input} />
            <Input onChangeText={(text) => this.setState({ slotsMax: text })} placeholder="Max size" style={Styles.input} />
            <Input onChangeText={(text) => this.setState({ price: text })} placeholder="Price" style={Styles.input}/>
            <Button text="Create!" style={Styles.buttonConfirm} onPress={this.onCreateEvent} underlayColor={Colors.purpleLight}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}