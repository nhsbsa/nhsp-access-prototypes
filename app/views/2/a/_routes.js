var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('check-dob');
})

router.post('/check-dob', function (req, res) {
    const answer = req.session.data['dob'];
    if (answer === 'yes') {
        res.redirect('confirm')
    } else {
        res.redirect('update-dob')
    }
})

router.post('/check', function (req, res) {
    const answer = req.session.data['matching-details'];
    if (answer === 'no') {
        res.redirect('confirm')
    } else {
        res.redirect('problem')
    }
})

router.post('/confirm', function (req, res) {
    const answer = req.session.data['nino'],
    match = ['QQ 12 34 56 C', 'QQ123456C', 'qq 12 34 56 c', 'qq123456c'];
    dupe = ['duplicate', 'dupe', 'dup', 'QQ 12 34 56 D', 'qq 12 34 56 d', 'QQ123456D', 'qq123456d'];

    if (match.includes(answer)) {
        res.redirect('check');
    } else if (dupe.includes(answer)) {
        res.redirect('call');
    } else {
        res.redirect('processing');
    }
})

module.exports = router