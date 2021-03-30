const _ = require('lodash');

const RawResultsModel = require('../schemas/result-schema');
const { TraineeOneDataModel, TraineeTwoDataModel, TraineeThreeDataModel } = require('../schemas/raw-data-schema');

const getAccumulatedResults = async () => {
    let totalCorrectMoves = 0;
    let totalCorrectPositions = 0;
    let totalNoMoves = 0;

    let traineeOneTimestamp = [];
    let traineeOneAccx = [];
    let traineeOneAccy = [];
    let traineeOneAccz = [];
    let traineeOneGccx = [];
    let traineeOneGccy = [];
    let traineeOneGccz = [];

    let traineeTwoTimestamp = [];
    let traineeTwoAccx = [];
    let traineeTwoAccy = [];
    let traineeTwoAccz = [];
    let traineeTwoGccx = [];
    let traineeTwoGccy = [];
    let traineeTwoGccz = [];

    let traineeThreeTimestamp = [];
    let traineeThreeAccx = [];
    let traineeThreeAccy = [];
    let traineeThreeAccz = [];
    let traineeThreeGccx = [];
    let traineeThreeGccy = [];
    let traineeThreeGccz = [];

    try {

        const resultsDocs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', resultsDocs);
        totalNoMoves = resultsDocs.length;

        for (const doc of resultsDocs) {
            if (doc.correctMove === doc.predictedMove) {
                totalCorrectMoves += 1;
            }

            if (doc.correctDancerIds === doc.dancerIds) {
                totalCorrectPositions += 1;
            }
        }

        const traineeOneDocs = await TraineeOneDataModel.find({});

        for (const doc of traineeOneDocs) {
            traineeOneAccx.push(doc.accx);
            traineeOneAccy.push(doc.accy);
            traineeOneAccz.push(doc.accz);
            traineeOneGccx.push(doc.yaw);
            traineeOneGccy.push(doc.pitch);
            traineeOneGccz.push(doc.roll);
            traineeOneTimestamp.push(doc.timestamp);
        }

        const traineeTwoDocs = await TraineeTwoDataModel.find({});

        for (const doc of traineeTwoDocs) {
            traineeTwoAccx.push(doc.accx);
            traineeTwoAccy.push(doc.accy);
            traineeTwoAccz.push(doc.accz);
            traineeTwoGccx.push(doc.yaw);
            traineeTwoGccy.push(doc.pitch);
            traineeTwoGccz.push(doc.roll);
            traineeTwoTimestamp.push(doc.timestamp);
        }

        const traineeThreeDocs = await TraineeThreeDataModel.find({});

        for (const doc of traineeThreeDocs) {
            traineeThreeAccx.push(doc.accx);
            traineeThreeAccy.push(doc.accy);
            traineeThreeAccz.push(doc.accz);
            traineeThreeGccx.push(doc.yaw);
            traineeThreeGccy.push(doc.pitch);
            traineeThreeGccz.push(doc.roll);
            traineeThreeTimestamp.push(doc.timestamp);
        }

    } catch (error) {
        throw new Error(error);
    }

    return { 
        totalCorrectMoves, 
        totalCorrectPositions, 
        totalNoMoves,
        traineeOneAccx,
        traineeOneAccy,
        traineeOneAccz,
        traineeOneGccx,
        traineeOneGccy,
        traineeOneGccz,
        traineeOneTimestamp,
        traineeTwoAccx,
        traineeTwoAccy,
        traineeTwoAccz,
        traineeTwoAccz,
        traineeTwoGccx,
        traineeTwoGccy,
        traineeTwoGccz,
        traineeTwoTimestamp,
        traineeThreeAccx,
        traineeThreeAccy,
        traineeThreeAccz,
        traineeThreeGccx,
        traineeThreeGccy,
        traineeThreeGccz,
        traineeThreeTimestamp
     };
}

module.exports = {
    getAccumulatedResults,
}


