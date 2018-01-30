import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import Styles from './AddEventModalStyles'

import Colors from '../../utils/colors'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Button from '../../components/Button'

import Schema from '../../models/Schema'
import Realm from 'realm'
import moment from 'moment'
import Geocoder from 'react-native-geocoder'

import { connect } from 'react-redux'
import { saveEvent } from '../../redux/mainActions'


class AddEventModal extends Component {

  constructor(props) {
    super(props)
    this.onCreateEvent = this.onCreateEvent.bind(this)
    this.onLocationBlur = this.onLocationBlur.bind(this)
    console.log(Realm.defaultPath)
    console.log(this.props.events)
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
        console.log(this.state)
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

        console.log(this.props.events)
      }).catch(error => {
        // implement user feedback - not connect to database
        console.log(error);
      });

  }

  onLocationBlur() {
    Geocoder.geocodeAddress(this.state.place).then(res => {
      const { lat, lng } = res[0].position
      this.setState(() => ({
        latitude: lat,
        longitude: lng
      }))
    })
  }

  render() {
    return (
        <View>
          <Modal
              visible={this.props.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={true}
          >
            <View style={Styles.container}>
              <View style={Styles.form}>
                <Title text="Create an event" />
                <Input onChangeText={(text) => this.setState({ name: text })} placeholder="Name" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ description: text })} placeholder="Description" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ type: text })} placeholder="Type" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ place: text })} onBlur={this.onLocationBlur} placeholder="Place" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ slots: text })} placeholder="Number of slots" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ date: text })} placeholder="Date" style={Styles.input}/>
                <Input onChangeText={(text) => this.setState({ price: text })} placeholder="Price" style={Styles.input}/>
                <Button text="Create" style={Styles.buttonConfirm} onPress={this.onCreateEvent} underlayColor={Colors.purpleLight}/>
                <Button text="Cancel" style={Styles.buttonCancel} onPress={this.props.closeModal} underlayColor={Colors.purpleLight}/>
              </View>
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