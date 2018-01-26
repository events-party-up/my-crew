import Sequelize from 'sequelize'
import _ from 'lodash'
import Faker from 'faker'

const Conn = new Sequelize(
  'relay',
  'postgres',
  'postgres',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

const Person = Conn.define('person', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Event = Conn.define('event', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  location_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location_lat: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  location_lng: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  openings: {
    type: Sequelize.INTEGER
  }
})

Conn.sync({force: true}).then(() => {
  _.times(10, () => {
    return Person.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: '123qwe'
    })
  })
})

export default Conn
