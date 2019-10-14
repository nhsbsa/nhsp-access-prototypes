var express = require('express')
var router = express.Router()

router.post('/start', function (req, res) {
    var estimate = req.body['estimateStart'];
    if(estimate === 'start-age') {
      res.redirect('age')
    } else if (estimate === 'start-date') {
        res.redirect('date')
    } else {
      res.redirect('event')
    }
})

router.post('/age', function (req, res) {
    res.redirect('event');
})

router.post('/date', function (req, res) {
    res.redirect('event');
})

router.post('/event', function (req, res) {
    var event = req.body['estimateEvent'];
    if(event === 'yes') {
      res.redirect('add-event')
    } else {
      res.redirect('/estimate')
    }
})

router.post('/add-event', function (req, res) {
    var type = req.body['estimateAddEvent'];
    if(type === 'changeHours') {
      res.redirect('event-hours')
    } else {
      res.redirect('event-salary')
    }
})

module.exports = router