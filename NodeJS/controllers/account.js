const express = require('express')
const router = express.Router()
const db = require('../db.js')

router.post('/login', function(req, res) {
  db.person.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(function(user, err) {
    if(user) {
      res.json({
        userId: user.id
      })
    } else {
      res.status(400).send()
    }
  })
})

router.post('/signup', function(req, res) {
  db.person.findOne({
    where: {
      email: req.body.email
    }
  }).then(function(user, err) {
    if(user) {
      res.status(400).send()
    } else {
      db.person.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(function(user) {
        res.json({
          userId: user.id
        })
      })
    }
  })
})


module.exports = router
