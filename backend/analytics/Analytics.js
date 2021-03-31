const _ = require('lodash');

const RawResultsModel = require('../schemas/result-schema');
const { TraineeOneDataModel, TraineeTwoDataModel, TraineeThreeDataModel } = require('../schemas/raw-data-schema');

const getAccumulatedData = async () => {
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
        console.log('Get accumulated data error ', error);
        throw new Error(error);
    }

    return { 
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

const getAccumulatedMoves = async () => {
    let totalCorrectMoves = 0;
    let totalIncorrectMoves = 0;
    let totalMoves = 0;

    let totalHair = 0;
    let totalGun = 0;
    let totalSidepump = 0;

    let totalHairCorrect = 0;
    let totalGunCorrect = 0;
    let totalSidepumpCorrect = 0;

    let totalHairIncorrect = 0;
    let totalGunIncorrect = 0;
    let totalSidepumpIncorrect = 0;

    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', resultsDocs);
        // totalMoves = resultsDocs.length;

        for (const doc of resultsDocs) {
            totalMoves += 1;

            if (doc.correctMove === 'hair') {
                totalHair += 1;
            } else if (doc.correctMove === 'gun') {
                totalGun += 1;
            } else if (doc.correctMove === 'sidepump') {
                totalSidepump += 1;
            }

            if (doc.correctMove === doc.predictedMove) {
                totalCorrectMoves += 1;

                if (doc.correctMove === 'hair') {
                    totalHairCorrect += 1;
                } else if (doc.correctMove === 'gun') {
                    totalGunCorrect += 1;
                } else if (doc.correctMove === 'sidepump') {
                    totalSidepumpCorrect += 1;
                }
            }
        }

        totalIncorrectMoves = totalMoves - totalCorrectMoves;
        totalHairIncorrect = totalHair - totalHairCorrect;
        totalGunIncorrect = totalGun - totalGunCorrect;
        totalSidepumpIncorrect = totalSidepump - totalSidepumpCorrect;

    } catch (error) {
        console.log('Get accumulated moves error ', error);
        throw new Error(error);
    }

    return {
        totalMoves,
        totalCorrectMoves,
        totalGun,
        totalGunCorrect,
        totalGunIncorrect,
        totalHair,
        totalHairCorrect,
        totalHairIncorrect,
        totalSidepump,
        totalSidepumpCorrect,
        totalSidepumpIncorrect
    }

}

const getAccumulatedPositions = async () => {
    let totalCorrectPositions = 0;
    let totalIncorrectPositions = 0;
    let totalPositions = 0;

    let traineeOneCorrectPosition = 0;
    let traineeOneIncorrectPosition = 0;
    let traineeTwoCorrectPosition = 0;
    let traineeTwoIncorrectPosition = 0;
    let traineeThreeCorrectPosition = 0;
    let traineeThreeIncorrectPosition = 0;

    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', resultsDocs);
        // totalPositions = resultsDocs.length;

        for (const doc of resultsDocs) {
            totalPositions += 1;
            
            if (doc.correctDancerIds === doc.dancerIds) {
                totalCorrectPositions += 1;
            } else {
                totalIncorrectPositions += 1;
            }
            const correctDancerIdsString = doc.correctDancerIds.trim();
            const correctDancerIdsArray = correctDancerIdsString.split(' ');

            const dancerIdsString = doc.dancerIds.trim();
            const dancerIdsArray = dancerIdsString.split(' ');

            let i = 0;
            for (const pos of correctDancerIdsArray) {
                if (pos === dancerIdsArray[i]) {
                    if (pos === '1') {
                        traineeOneCorrectPosition += 1;
                    } else if (pos === '2') {
                        traineeTwoCorrectPosition += 1;
                    } else if (pos == '3') {
                        traineeThreeCorrectPosition += 1;
                    }
                } else {
                    if (pos === '1') {
                        traineeOneIncorrectPosition += 1;
                    } else if (pos === '2') {
                        traineeTwoIncorrectPosition += 1;
                    } else if (pos == '3') {
                        traineeThreeIncorrectPosition += 1;
                    }
                } 
                i += 1;
            }
        }

    } catch (error) {
        console.log('Get accumulated positions error ', error);
        throw new Error(error);
    }

    return {
        totalPositions,
        totalCorrectPositions,
        totalIncorrectPositions,
        traineeOneCorrectPosition,
        traineeOneIncorrectPosition,
        traineeTwoCorrectPosition,
        traineeTwoIncorrectPosition,
        traineeThreeCorrectPosition,
        traineeThreeIncorrectPosition
    }

}

module.exports = {
    getAccumulatedData,
    getAccumulatedMoves,
    getAccumulatedPositions
}


