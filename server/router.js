const router = require('express').Router();
const controller = require('./controllers/url.controller');

router.get('/:code', controller.goToUrl);
router.post('/api', controller.sendUrl);

module.exports = router;
