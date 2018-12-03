const { Content, validate } = require('../models/contents');
const express = require('express');
const router = express.Router();

router.get('/get', async (req, res) => {
    console.log('request content in');
    const contents = await Content.find().sort('title');
    res.send(contents);
});

router.post('/getDetail', async (req, res) => {
    //console.log('request getDetail in');
    //console.log(req.body.name);
    const contentDetail = await Content.find({ title: req.body.name});
    //console.log(contentDetail);
    res.send(contentDetail);
});


router.post('/reg',async(req, res) => {
   //console.log(JSON.stringify(req.body));
   //console.log(req.body.content);
   const { title, date, cost, people, place, details,tag} = req.body.content;
  
//    const { error } = validate(req.body);
//    if(error) return res.status(400).send(error.message);

    let content = new Content({ title, date, cost, people,place,details });
    content = await content.save();
    console.log('save to DB');
    //browser로 간다
    //res.redirect('/club');
})

module.exports = router;