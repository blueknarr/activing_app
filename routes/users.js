const { User, validate } = require('../models/users');
const router = require('express').Router();

router.get('/', async(req, res) => {
    console.log('router content in');
});

router.post('/',async(req, res) => {
    //console.log(JSON.stringify(req.body));
    //console.log(req.body.content);
    const { googleID, email, name, password, username, nickname, sex, born, region, tags } = req.body.user;
   
 //    const { error } = validate(req.body);
 //    if(error) return res.status(400).send(error.message);
 
     let user = new User({ googleID, email, name, password, username, nickname, sex, born, region, tags});
     user = await user.save();
     console.log('save to DB');
     res.redirect('/');
     res.send('register completed');
 })

router.get('/current',(req, res) => {
    res.send(req.user);
})

router.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});

module.exports = router;

