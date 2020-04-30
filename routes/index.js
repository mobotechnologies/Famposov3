const { Router } = require('express');
const rfqback = require('./rfqback');
const users = require('./users');

const router = new Router({ mergeParams: true });

// rfq Api's
router.use('/rfq',rfqback);

// User Api's
router.use('/users', users);


module.exports = router;
