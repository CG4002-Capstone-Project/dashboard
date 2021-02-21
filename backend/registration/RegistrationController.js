const express = require('express');
const app = express();

const UserModel = require('../schemas/user-schema');


const userInstance = new UserModel({ name: 'test4', email: 'jaac@jelo.com', username: 'tt4', password: 'cads' });
userInstance.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('saved!');
    }
})
module.exports = app;