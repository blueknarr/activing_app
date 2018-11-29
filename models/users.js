const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID:{
        type:String,
        required: true
    }
});

const User = mongoose.model('User',userSchema);

exports.User = User;
// const Joi = require('joi');
// const mongoose = require('mongoose');

// /* Model */
// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minlength:2,
//         maxlength:5
//     },
//     userId:{
//         type:String,
//         required:true,
//         minlength:2
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:8
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     birth:{
//         type:String,
//         required:true
//     },
//     gender:{
//         type:String,
//         required:true
//     },
//     pic:{
//         type:String
//     }
// });

// /* Mapping */
// const User = mongoose.model('User',userSchema);

// function validateUser(user){
//     const schema = {
//         name: Joi.string().min(2).max(5).required(),
//         userId: Joi.string().min(2).required(),
//         password: Joi.string().min(8),
//         email: Joi.string().required(),
//         birth: Joi.string().required(),
//         gender: Joi.string().required(),
//         pic: Joi.string()
//     }
//     return Joi.validate(user,schema);
// }

// exports.User = User;
// exports.validate = validateUser;