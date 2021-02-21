require('dotenv').config();
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserModel = require('./schemas/user-schema');

const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Cluster');
})

const userInstance = new UserModel({ name: 'test3', email: 'jaab@jelo.com', username: 'tt3', password: 'calls' });
userInstance.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('saved!');
    }
})

app.use(bodyParser.json());


app.listen(3333, () =>  {
    console.log('Authentication service started on port 3333');
})