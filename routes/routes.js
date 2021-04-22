const express = require('express');
const controller = require('../controller/controller');
const router = express.Router();

router.get('/', controller.get);
    // Since we only need a get, is this the only route we need?

module.exports = router;