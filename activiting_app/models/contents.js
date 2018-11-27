const joi = require('joi');
const mongoose = require('mongoose');

/* Model */
const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        minlength:2
    },
    master:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    date:{
        type:String
    },
    pic:{
        type:String
    },
    content:{
        type:String,
        require:true
    },
    totalParticipants:{
        type:Number,
        require:true
    },
    participants:{
        type:String
    },
});

const Content = mongoose.model('Content',contentSchema);

function validateContent(content){
    const schema = {

    }
    return joi.validate(content,schema);
}

exports.Content = Content;
exports.validate = validateContent;