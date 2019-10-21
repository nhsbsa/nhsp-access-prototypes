var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.redirect('estimate/15');
})

router.post('/when', function (req, res) {
    var estimate = req.body['estimateStart'];
    if(estimate === 'start-age') {
      res.redirect('age')
    } else if (estimate === 'start-date') {
        res.redirect('date')
    } else {
      res.redirect('change-past-hours')
    }
})

router.post('/age', function (req, res) {
    res.redirect('change-past-hours');
})

router.post('/date', function (req, res) {
    res.redirect('change-past-hours');
})

router.post('/change-past-hours', function (req, res) {
    var event = req.body['estimateEvent'];
    if(event === 'yes') {
      res.redirect('past-hours')
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