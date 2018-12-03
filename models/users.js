const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const userSchema = new Schema({
    googleID: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    nickname: {
        type: String
    },
    sex: {
        type: String
    },
    born: {
        type: Number
    },
    region: {
        type: String
    },
    tags: {
        type: Array
    },
});

const User = mongoose.model('User',userSchema);

// googleID를 기반으로 가입 여부 확인
// User.findByEmail = function(email) {
//     return this.findOne({'profile.googleID': googleID}).exec();
// };

//회원가입 새로운 user 객체 만들기
// User.register = function({ googleID, email, username, nickname, sex, born, region, tags}) {
//     const user = new this ({
//         googleID,
//         email,
//         username,
//         nickname,
//         sex,
//         born,
//         region,
//         tags
//     });
//     return user.save();
// };

//함수로 전달받은 password의 해시값과, 데이터에 있는 해시값 비교
User.validatePassword = function(password) {
    const hashed = hash(password);
    return this.password === hashed;
}

exports.User = User;
