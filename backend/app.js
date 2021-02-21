const express = require('express');
const bodyParser = require('body-parser');

const Login = require('./login/LoginController');
const Registration = require('./registration/RegistrationController');

const app = express();
app.use(bodyParser.json());



// database
const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Cluster');
})



app.use('/login', Login);
app.use('/register', Registration);

module.exports = app;