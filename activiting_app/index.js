const users = require('./routes/users');
const contents = require('./routes/contents');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dbRoute = 'mongodb://activiting:test1234@ds147797.mlab.com:47797/activiting_app';
//connect MongoDB
mongoose.connect(dbRoute, {useNewUrlParser:true})
.then( () => { console.log('Connected to MongoDB') })
.catch( (error) => { console.log(error) });

/* Middlewares */
app.use(express.json());
app.use('/api/users',users);
app.use('/api/contents',contents);

/* Server */
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`) });