const router = require('express').Router();
const controller = require('./controllers/url.controller');

router.get('/:code', controller.goToUrl);
router.get('/:code/stats', controller.getStats);
router.post('/api', controller.sendUrl);

module.exports = router;
