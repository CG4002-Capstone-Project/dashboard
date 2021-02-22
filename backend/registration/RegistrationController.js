const express = require('express');
const { body, validationResult } = require('express-validator');
const { decodeAccessToken } = require('../auth/Auth');
const app = express();

const UserCreate = require('./Registration');

app.post(
    '/create',
    async (req, res) => {
        try {
            const response = await UserCreate(req.body);
            return res.json(response);

        } catch (error) {
            return res.status(403).json({ error });
        }
})

app.post(
    '/decode',
    async (req, res) => {
        console.log(`headers access token ${req.headers.accesstoken}` )
        const {email, role} = decodeAccessToken(req.headers.accesstoken);
        return res.json({email, role});
    }
)


module.exports = app;