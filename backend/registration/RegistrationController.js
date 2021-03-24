const express = require('express');
const { body, validationResult } = require('express-validator');
const { decodeAccessToken } = require('../auth/Auth');
const app = express();

const { UserCreate, CoachTreeCreate } = require('./Registration');

app.post(
    '/create',
    async (req, res) => {
        try {
            // creates user documents in users collection 
            console.log(JSON.stringify(req.body));
            const response = await UserCreate(req.body);
            // creates coach-trainee entity relationships in coach_trees collections 
            await CoachTreeCreate(req.body);
            
            return res.json(response);

        } catch (error) {
            return res.status(403).json({ error });
        }
})

app.post(
    '/decode',
    async (req, res) => {
        console.log('req ' + JSON.stringify(req.headers));
        console.log(`headers access token ${req.headers.authorization}` )
        const {email, role} = decodeAccessToken(req.headers.authorization);
        return res.json({email, role});
    }
)


module.exports = app;