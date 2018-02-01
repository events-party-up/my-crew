const express = require('express')
const router = express.Router()
const db = require('../db.js')

router.get('/list', function(req, res) {

  //TODO handle filters

  db.event.findAll().then(function(events) {
    res.json(events)
  })
})

router.get('/attending', function(req, res) {
  let userId

  if(req.query.hasOwnProperty('userId') && req.query.userId > 0) {
		userId = req.query.userId
	} else {
    res.status(400).send()
    return
  }

  db.sequelize.query('SELECT * FROM signups JOIN events ON events.id = signups.event_id WHERE person_id = ?', { replacements: [userId], type: db.sequelize.QueryTypes.SELECT }
).then(function (events) {
	   res.json(events);
	});
})

router.post('/new', function(req, res) {
  let userId

  if(req.query.hasOwnProperty('userId') && req.query.userId > 0) {
		userId = req.query.userId
	} else {
    res.status(400).send()
    return
  }

  db.event.create({
    event_name: req.body.name,
    location_name: req.body.locationName,
    type: req.body.type,
    description: req.body.description,
    location_lat: req.body.lat,
    location_lng: req.body.lng,
    price: req.body.price,
    openings: req.body.openings,
    date: req.body.date,
    owner: userId
  }).then(function(event) {
    res.json({ eventId : event.id })
  })
})


module.exports = router
