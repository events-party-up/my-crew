import React, { Component } from 'react'
import { Text, View, Modal, ScrollView, StyleSheet } from 'react-native'
import Styles from './AddEventModalStyles'

import Colors from '../../utils/colors'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Button from '../../components/Button'

import Schema from '../../models/Schema'
import Realm from 'realm'
import moment from 'moment'

import { connect } from 'react-redux'
import { saveEvent } from '../../redux/mainActions'

import RNGooglePlaces from 'react-native-google-places'

class AddEventModal extends Component {

  constructor(props) {
    super(props)
    // console.log(Realm.defaultPath)
    this.onCreateEvent = this.onCreateEvent.bind(this)
    this.openSearchModal = this.openSearchModal.bind(this)
    this.state = {
      name: '',
      description: '',
      type: '',
      place: '',
      slots: '',
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
            name: this.state.name,
            description: this.state.description,
            price: parseInt(this.state.price),
            date: moment(this.state.date, 'DD-MM-YYYY').toDate(),
            locationName: this.state.place,
            type: this.state.type,
            openings: parseInt(this.state.slots),
            latitude: this.state.latitude,
            longitude: this.state.longitude
          });
        })

        this.props.dispatch(saveEvent({
          title: this.state.name,
          description: this.state.description,
          date: moment(this.state.date, 'DD-MM-YYYY').toDate(),
          local: this.state.place,
          price: this.state.price,
          type: this.state.type,
          openings: parseInt(this.state.slots),
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }))

        this.props.closeModal();
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
        <View>
          <Modal
              visible={this.props.modalVisible}
              animationType={'slide'}
              onRequestClose={this.props.closeModal}
              transparent={true}
          >
            <View style={Styles.container}>
              <ScrollView>
                <View style={Styles.form}>
                  <Title text="Create an event" />
                  <Input onChangeText={(text) => this.setState({ name: text })} placeholder="Name" style={Styles.input}/>
                  <Input onChangeText={(text) => this.setState({ description: text })} placeholder="Description" style={Styles.input}/>
                  <Input onChangeText={(text) => this.setState({ type: text })} placeholder="Type" style={Styles.input}/>
                  <Input onFocus={this.openSearchModal} value={this.state.locationName} placeholder="Place" style={Styles.input} />
                  <Input onChangeText={(text) => this.setState({ slots: text })} placeholder="Number of slots" style={Styles.input} />
                  <Input onChangeText={(text) => this.setState({ date: text })} placeholder="Date" style={Styles.input}/>
                  <Input onChangeText={(text) => this.setState({ price: text })} placeholder="Price" style={Styles.input}/>
                  <Button text="Create" style={Styles.buttonConfirm} onPress={this.onCreateEvent} underlayColor={Colors.purpleLight}/>
                  <Button text="Cancel" style={Styles.buttonCancel} onPress={this.props.closeModal} underlayColor={Colors.purpleLight}/>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.main.events
  };
};

export default connect(mapStateToProps)(AddEventModal)
