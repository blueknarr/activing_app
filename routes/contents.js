const { Content, validate } = require('../models/contents');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const content = await Content.find().sort('date');
});

module.exports = router;