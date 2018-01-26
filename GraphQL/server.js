const Express = require('express');
const GraphHTTP = require('express-graphql')
const Schema = require('./schema')

const app = Express()

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('Server running on 3000')
})
