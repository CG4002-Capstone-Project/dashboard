require('dotenv').config();
const generateRawData = require('./raw_data_generator');
const generateResults = require('./raw_results_generator');
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const { RawResultModel, RawDataModel, RawEMGModel } = require('./schema');
const parse = require('csv-parse/lib/sync');
const generateRawEMG = require('./raw_emg_generator');

// generateRawData();
// generateResults();
// generateRawEMG();



const connectToDb = async () => {
    const URI = process.env.MONGO_DB_URI;
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to Jeevz MongoDB Cluster');
    })
}

const readResultsIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_results.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['dancerIds', 'correctDancerIds', 'predictedMove', 'syncDelay', 'accuracy']
    })

// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626
    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            const resultInstance = new RawResultModel({ 
                dancerIds: records[i][0],
                correctDancerIds: records[i][1],
                predictedMove: records[i][2],
                syncDelay: records[i][3],
                accuracy: records[i][4],
                timestamp: Date.now()
            });
            console.log(resultInstance);

            resultInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(10000); // 50000
        }
    }

    load();

    // fs.createReadStream('raw_results.csv')
    // .pipe(csv({headers: [ 'timestamp', 'dancerIds', 'predictedMove', 'syncDelay', 'accuracy']}))
    // .on('data', async (row) => {
    //     console.log(row)
    //     console.log('hello');
    //     await timer(3000);
    //     const resultInstance = new RawResultModel({ timestamp: row.timestamp, dancerIds: row.dancerIds, predictedMove: row.predictedMove, syncDelay: row.syncDelay, accuracy: row.accuracy });
    //     resultInstance.save((err) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(` ${row.predictedMove} saved!`);
    //         }
    //     })
    // })
    // .on('end', () => {
    //     console.log('finished writing raw results csv file to database');
    // })
}

const readDataIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_data.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['trainee_id', 'yaw', 'pitch', 'row', 'accx', 'accy', 'accz']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            const dataInstance = new RawDataModel({ 
                trainee_id: records[i][0],
                yaw: records[i][1],
                pitch: records[i][2],
                roll: records[i][3],
                accx: records[i][4],
                accy: records[i][5],
                accz: records[i][6],
                timestamp: Date.now(),
            });
            // console.log(resultInstance);

            dataInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`data instance ${i} sent`)
                    // console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(100);
        }
    }

    load();
}

const readEMGIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_emg.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['emgValue']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            const emgInstance = new RawEMGModel({ 
                emgValue: records[i][0],
                timestamp: Date.now(),
            });

            emgInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`emg instance ${i} sent`)
                    // console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(30);
        }
    }
    load();
}

const readEverythingIntoDb = () => {
    const arrayOfDataObjects = fs.readFileSync('raw_data.csv', 'utf8');
    const dataRecords = parse(arrayOfDataObjects, {
        headers: ['trainee_id', 'yaw', 'pitch', 'row', 'accx', 'accy', 'accz']
    })

    const arrayOfEmgObjects = fs.readFileSync('raw_emg.csv', 'utf8');
    const emgRecords = parse(arrayOfEmgObjects, {
        headers: ['emgValue']
    })

    const arrayOfResultObjects = fs.readFileSync('raw_results.csv', 'utf8');
    const resultRecords = parse(arrayOfResultObjects, {
        headers: ['dancerIds', 'correctDancerIds', 'predictedMove', 'syncDelay', 'accuracy']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));
    let j = 0, k = 0;

    async function load() {
        for (let i = 0; i < dataRecords.length; i++) {
            const dataInstance = new RawDataModel({ 
                trainee_id: dataRecords[i][0],
                yaw: dataRecords[i][1],
                pitch: dataRecords[i][2],
                roll: dataRecords[i][3],
                accx: dataRecords[i][4],
                accy: dataRecords[i][5],
                accz: dataRecords[i][6],
                timestamp: Date.now(),
            });
            await timer(100);

            dataInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`data instance ${i} sent`)
                    // console.log(` ${records[i][2]} saved!`);
                }
            })

            // console.log('here ' + typeof(dataRecords[i][0]));

            if (dataRecords[i][0] == "1" && j < emgRecords.length) {
                const emgInstance = new RawEMGModel({ 
                    emgValue: emgRecords[j][0],
                    timestamp: Date.now(),
                });
    
                emgInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`emg instance ${j} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })

                j += 1;
            }

            if (i % 400 == 200 && k < resultRecords.length) {
                const resultInstance = new RawResultModel({ 
                    dancerIds: resultRecords[k][0],
                    correctDancerIds: resultRecords[k][1],
                    predictedMove: resultRecords[k][2],
                    syncDelay: resultRecords[k][3],
                    accuracy: resultRecords[k][4],
                    timestamp: Date.now()
                });

                resultInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(` result instance ${k} saved!`);
                    }
                })

                k += 1;
            }
        }
    }

    load();

}

connectToDb();
readEverythingIntoDb();
// readDataIntoDb();
// readEMGIntoDb();
// readResultsIntoDb();
