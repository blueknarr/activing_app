const passport = require('passport');
const router = require('express').Router();
const User = require('../models/users.js');

//middleware 함수
router.get(
    '/', //user req toss
    passport.authenticate('google',{ scope: ['profile', 'email']})
);

//데이터 넘겨줌
router.get(
    '/callback', 
    passport.authenticate('google'), //can not get /auth/google/callback
    (req, res) => {
        res.redirect('/');
    }
);

// exports.register = async (ctx) => {
//     ctx.body = 'register';
// }

// exports.login = async (ctx) => {
//     ctx.body = 'login';
// }

// exports.logout = async (ctx) => {
//     ctx.body = 'logout';
// }

module.exports = router;