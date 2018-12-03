const { User, validate } = require('../models/users');
const router = require('express').Router();

router.get('/', async(req, res) => {
    console.log('router content in');
});

router.post('/',async(req, res) => {
    //console.log(JSON.stringify(req.body));
    //console.log(req.body.content);
    console.log(req.body.user);
    const { googleID ,email, username, nickname, sex, born, region, tags } = req.body.user;
   
 //    const { error } = validate(req.body);
 //    if(error) return res.status(400).send(error.message);
 
     let user = new User({ googleID, email, username, nickname, sex, born, region, tags});
     user = await user.save();
     console.log('save to DB');
 })

router.get('/current',(req, res) => {
    res.send(req.user);
})

router.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});

router.patch('/', async (req, res) => {
    console.log('update 요청 왔당');
    const user = await User.find({ googleID: req.user.googleID });
    // etc infos from req.body 이제 얘를 업데이트하고 signup 회원가입 버튼 누르면 signup.js의 버튼 이벤트가 발생한다.
    user.username = req.body.username;
    user.nickname = req.body.nickname;
    user.born = req.body.born;
    user.region = req.body.region;
    user.tags = req.body.tags;
    
    await user.save();
    res.redirect('/');
})


module.exports = router;

