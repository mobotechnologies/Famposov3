const { Router } = require('express');
const router = new Router({ mergeParams: true });

/* GET users listing. */
router.get('/usertest', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
