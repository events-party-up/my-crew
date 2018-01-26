import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql'
import DB from './db'

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'This represents a Person ',

  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(person) {
          return person.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(person) {
          return person.name
        }
      },
      email: {
        type: GraphQLString,
        resolve(person) {
          return person.email
        }
      },
      password: {
        type: GraphQLString,
        resolve(person) {
          return person.password
        }
      }
    }
  }
})

const Event = new GraphQLObjectType({
  name: 'Event',
  description: 'This represents an Event',

  fields: () => {
    id: {
      type: GraphQLInt,
      resolve(post) {
        return post.id
      }
    },
    name: {
      type: GraphQLString,
      resolve(post) {
        return post.name
      }
    },
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query',

  fields: () => {
    return {
      people: {
        type: new GraphQLList(Person),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        }
        resolve(root, args) {
          return Db.models.person.findAll({where: args})
        }
      },
      event: {
        type: new GraphQLList(Event),
        resolve(root, args) {
          return Db.models.event.findAll({where: args})
        }
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema
