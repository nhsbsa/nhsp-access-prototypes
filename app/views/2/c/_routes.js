var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.post('/nino', function (req, res) {
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

router.post('/confirm', function (req, res) {
    const answer = req.session.data['nino'],
    match = ['QQ 12 34 56 C', 'QQ123456C', 'qq 12 34 56 c', 'qq123456c'];

    if (match.includes(answer)) {
        res.redirect('check');
    } else {
        res.redirect('processing');
    }
})

router.post('/check', function (req, res) {
    const answer = req.session.data['matching-details'];
    if (answer == 'correct') {
        res.redirect('problem')
    } else if (answer == 'nino') {
        res.redirect('nino')
    } else {
        res.redirect('update-personal-details')
    }
})

module.exports = router