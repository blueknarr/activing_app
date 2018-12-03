const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const userSchema = new Schema({
    googleID:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    born: {
        type: Int16Array,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
});

const User = mongoose.model('User',userSchema);

//googleID를 기반으로 가입 여부 확인
User.statics.findByGoogleID = function(googleID) {
    return this.findOne({'profile.googleID': googleID}).exec();
};

//회원가입 새로운 user 객체 만들기
User.statics.register = function({googleID, email, name, password, username, nickname, sex, born, region, tags}) {
    const user = new this ({
        googleID,
        email,
        name,
        password: hash(password),
        username,
        nickname,
        sex,
        born,
        region,
        tags
    });
    return user.save();
};

//함수로 전달받은 password의 해시값과, 데이터에 있는 해시값 비교
User.methods.validatePassword = function(password) {
    const hashed = hash(password);
    return this.password === hashed;
}

exports.User = User;
