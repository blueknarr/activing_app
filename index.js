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
mongoose.connect(config.DB.mongoURI, { useNewUrlParser:true })
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

/* Server */
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Listening on port ${port}`) });