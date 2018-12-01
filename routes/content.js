const { Content, validate } = require('../models/contents');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    console.log('router content in');
});

router.post('/',async(req, res) => {
   //console.log(JSON.stringify(req.body));
   //console.log(req.body.content);
   const { title, date, cost, people, tag} = req.body.content;
   console.log(title);
   console.log(date);
   console.log(cost);
   console.log(people);
})

module.exports = router;