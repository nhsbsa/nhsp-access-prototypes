// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// This moves estimate routing to estimate directory
router.use('/estimate/', require('./views/estimate/_routes'))

// This moves routing to another directory
// router.use('/1/', require('./views/1/_routes'))

module.exports = router;
