import Realm from 'realm'

const Event = {
  name: 'Event',
  properties: {
    name:  'string',
    description: 'string',
    price: {type: 'int', default: 0},
    date: 'date',
    locationName: 'string',
    type: 'string',
    openings: {type: 'int', default: 1},
    latitude: 'double',
    longitude: 'double'
    // participants: 'Person[]'
  }
}

export default Event