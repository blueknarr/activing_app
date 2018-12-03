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
 
     let user = new User({ googleID, email, username, nickname, sex, born, region, tags });
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

router.put('/update', async (req, res) => {
    console.log('update 요청 왔당');
    try {
        let user = await User.findOne({ googleID: req.user.googleID });
        console.log(req.body.user)
        console.log(user.born)
        user.username = req.body.user.username;
        user.nickname = req.body.user.nickname;
        user.born = req.body.user.born;
        user.region = req.body.user.region;
        user.tags = req.body.user.tags;
        console.log(user)
        user = await user.save();
        
        res.redirect('/');
    } catch (error) {
        console.error('err:::',error.message)
    }
    
    
    // etc infos from req.body 이제 얘를 업데이트하고 signup 회원가입 버튼 누르면 signup.js의 버튼 이벤트가 발생한다.
    
})


module.exports = router;

