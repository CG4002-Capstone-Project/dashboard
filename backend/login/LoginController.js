const express = require('express');
const app = express();
const { createLogInstance } = require('./Login');


module.exports = app;

app.post(
    '/attempt',
    async (req, res) => {
        try {
            // creates user documents in users collection 
            console.log('Login Attempt: ', JSON.stringify(req.body));
            const response = await createLogInstance(req.body);
            
            
            return res.json(response);

        } catch (error) {
            return res.status(403).json({ error });
        }
})