const { Content, validate } = require('../models/contents');
const express = require('express');
const router = express.Router();

router.get('/get', async (req, res) => {
    console.log('request content in');
    const contents = await Content.find().sort('title');
    res.send(contents);
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
    //browser로 간다
    res.redirect('/club');
})

module.exports = router;