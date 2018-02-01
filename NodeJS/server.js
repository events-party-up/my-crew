"use strict";
const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const db = require('./db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(require('./controllers/_index'))

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
  })
})
