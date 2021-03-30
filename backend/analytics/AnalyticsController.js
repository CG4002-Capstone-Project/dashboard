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
            const { totalCorrectMoves, totalCorrectPositions } = await getAccumulatedResults();
            console.log('ANALYTICS RESULTS ', totalCorrectMoves, totalCorrectPositions);
            return res.status(200).json({ totalCorrectMoves, totalCorrectPositions});

        } catch (error) {
            return res.status(403).json({ error });
        }
})