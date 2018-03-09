import Realm from 'realm'

const Event = {
  name: 'Event',
  properties: {
    name: 'string',
    description: 'string',
    date: 'date',
    slotsMin: {type: 'int', default: 1},
    slotsMax: {type: 'int', default: 1},
    price: {type: 'int', default: 0},
    locationName: 'string',
    latitude: 'double',
    longitude: 'double'
    // participants: 'Person[]'
  }
}

export default Event