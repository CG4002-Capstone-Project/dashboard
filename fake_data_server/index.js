require('dotenv').config();
const generateRawData = require('./raw_data_generator');
const generateResults = require('./raw_results_generator');
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const { RawResultModel, RawDataModel } = require('./schema');
const parse = require('csv-parse/lib/sync');

// generateRawData();
// generateResults();

const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Cluster');
})

const readResultsIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_results.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['timestamp', 'dancerIds', 'predictedMove', 'syncDelay', 'accuracy']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            console.log(i);
            const resultInstance = new RawResultModel({ 
                timestamp: records[i][0],
                dancerIds: records[i][1],
                predictedMove: records[i][2],
                syncDelay: records[i][3],
                accuracy: records[i][4],
            });
            console.log(resultInstance);

            resultInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(3000);
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


readResultsIntoDb();