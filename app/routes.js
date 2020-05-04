// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// This moves estimate routing to estimate directory
router.use('/estimate/', require('./views/estimate/_routes'))

// This moves routing to another directory
router.use('/nhs-login/', require('./views/nhs-login/_routes'))
router.use('/2/a/', require('./views/2/a/_routes'))
router.use('/2/b/', require('./views/2/b/_routes'))

module.exports = router;
