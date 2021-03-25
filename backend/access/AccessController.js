const express = require('express');
const app = express();
const { verifyUserAccess } = require('./Access');


module.exports = app;

app.post(
    '/access',
    async (req, res) => {
        try {
            // creates user documents in users collection 
            console.log('User Access: ', JSON.stringify(req.body));
            const isUserGrantedAccess = await verifyUserAccess(req.body);

            return res.json({ success: isUserGrantedAccess });

        } catch (error) {
            return res.status(403).json({ error });
        }
})