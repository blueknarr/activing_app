const Joi = require('joi');
const mongoose = require('mongoose');

/* Model */
const contentSchema = new mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:String
    },
    cost:{
        type:String
    },
    people:{
        type:String
    },
    tag:[]
});

const Content = mongoose.model('Content',contentSchema);

function validateContent(content){
    const schema = {
        title: Joi.string(),
        date: Joi.string(),
        cost: Joi.string(),
        people: Joi.string(),
        tag: Joi.array()
    }
    return Joi.validate(content,schema);
}

exports.Content = Content;
exports.validate = validateContent;