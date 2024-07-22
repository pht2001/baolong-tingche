const express = require('express');
const router = express.Router();

const userHandler = require('../router_handler')

router.get('/get_data', userHandler.getData)

module.exports = router