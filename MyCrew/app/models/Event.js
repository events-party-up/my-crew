import Realm from 'realm'

const Event = {
  name: 'Event',
  properties: {
    name:  'string',
    price: {type: 'int', default: 0},
    date: 'date',
    locationName: 'string',
    locationLat: 'double',
    locationLng: 'double',
    type: 'string',
    openings: {type: 'int', default: 1},
    // participants: 'Person[]'
  }
}

export default Event
