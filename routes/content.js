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
  
//    const { error } = validate(req.body);
//    if(error) return res.status(400).send(error.message);

    let content = new Content({ title, date, cost, people });
    content = await content.save();
    console.log('save to DB');
    res.redirect('/club');
    res.send('hello');
    //res.send('insert done');
})

module.exports = router;