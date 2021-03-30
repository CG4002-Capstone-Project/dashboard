const express = require('express');
const app = express();
const { authChecker } = require('../auth/Auth');
const { getAccumulatedResults } = require('./Analytics');



module.exports = app;

app.get(
    '/results',
    async (req, res) => {
        try {
            console.log('ANALYTICS PRE-RESULTS');
            const accumulatedResults = await getAccumulatedResults();
            console.log('ANALYTICS RESULTS ', accumulatedResults);
            return res.status(200).json(accumulatedResults);
        } catch (error) {
            return res.status(403).json({ error });
        }
})