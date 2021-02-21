const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

const UserCreate = require('./Registration');

app.post(
    '/create', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            const response = await UserCreate(req.body);
            return res.json(response);

        } catch (error) {
            return res.status(403).json({ error });
        }
})


module.exports = app;