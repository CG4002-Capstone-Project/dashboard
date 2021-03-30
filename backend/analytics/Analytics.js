const _ = require('lodash');

const RawResultsModel = require('../schemas/result-schema');

const getAccumulatedResults = async () => {
    let totalCorrectMoves = 0;
    let totalCorrectPositions = 0;
    let totalNoMoves = 0;

    try {

        const docs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', docs);
        totalNoMoves = docs.length;

        for (const doc of docs) {
            if (doc.correctMove === doc.predictedMove) {
                totalCorrectMoves += 1;
            }

            if (doc.correctDancerIds === doc.dancerIds) {
                totalCorrectPositions += 1;
            }
        }

    } catch (error) {
        throw new Error(error);
    }

    return { totalCorrectMoves, totalCorrectPositions, totalNoMoves }
}

module.exports = {
    getAccumulatedResults,
}


