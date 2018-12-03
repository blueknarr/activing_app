const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const config = require('config');
const cookieSession = require('cookie-session');

const users = require('./routes/users');
const content = require('./routes/content');
const auth = require('./routes/auth');
const app = express();
require('./services/passport');
/* connect MongoDB */
const db = 'mongodb://activiting:test1234@ds147797.mlab.com:47797/activiting_app';
const localDB = 'mongodb://localhost/test';

mongoose.connect(localDB, { useNewUrlParser:true })
.then( () => { console.log('Connected to MongoDB') })
.catch( (error) => { console.log(error) });

app.use(
    cookieSession({
        name: 'MERN cookie',
        maxAge: (30 * 24 * 60 * 60 * 1000),
        keys: [config.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use(express.json());
app.use('/auth/google',auth);
app.use('/api/users',users);
app.use('/reg/content',content);
app.use('/api/content',content);


if (app.get('env') === 'production') {
    // Express 가 production 어셋들을 제공한다. (main.js, main.css ...)
    app.use(express.static('client/build'));
    
    // Express 가 라우트를 구분하지 못하면 index.html 을 제공한다.
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


/* Server */
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Listening on port ${port}`) });