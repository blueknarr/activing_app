const { User, validate } = require('../models/users');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

/* Routes */
router.get('/', async(req, res) => {
    const users = await User.find().sort('userId');
    res.send(users);
});

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.message);

    let user = new User( {
        name: req.body.name,
        userId: req.body.userId,
        password: req.body.password,
        email: req.body.email,
        birth: req.body.birth,
        gender: req.body.gender,
        pic: req.body.pic
    });
    user = await user.save();
    res.send(user);
});

router.patch('/:id', async(req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.id);
    if(!user) return res.status(400).send(`Can't find the ${req.params.id}`);

    user.email = req.body.email;
    user.pic = req.body.pic;

    const result = await user.save();
    if(!result) return req.status(400).send('Unable save to user');

    req.send(result);
});

router.delete('/:id', async(req,res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return req.status(404).send(`Can't find the ${req.params.id}`);
    res.send(user);
});

module.exports = router;