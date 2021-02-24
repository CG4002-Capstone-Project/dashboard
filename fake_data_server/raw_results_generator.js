const randomFloat = require('random-floating');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Creating Data for 5 mins 
 * Since there are 8 different moves, we will yield these columns every 30 seconds 
 * The columns are timestamp, predictedMove, dancerIds, synq delay, accuracy.
 * 
 * predictedMove : 1/2/3/4/5/6/7/8
 * dancerIds : 1 2 3 / 1 3 2 / 2 1 3 / 2 3 1 / 3 1 2 / 3 2 1 
 * sync delay: 0 - 2.5s 
 * accuracy: 1 - 100%
 */

function generateResults() {
    const data = [
        {
            timestamp: 1614144796678,
            dancerIds: '2 1 3',
            predictedMove: 1,
            syncDelay: 0.3,
            accuracy: 40
        },
        {
           timestamp: 1614144796708,
           dancerIds: '3 2 1',
           predictedMove: 2,
           syncDelay: 0.6,
           accuracy: 50,
       },
       {
           timestamp: 1614144796738,
           dancerIds: '1 3 2',
           predictedMove: 4,
           syncDelay: 0.3,
           accuracy: 40,
       },
       {
           timestamp: 1614144796768,
           dancerIds: '3 1 2',
           predictedMove: 3,
           syncDelay: 0.2,
           accuracy: 50,
       },
       {
           timestamp: 1614144796798,
           dancerIds: '2 3 1',
           predictedMove: 6,
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           timestamp: 1614144796828,
           dancerIds: '1 2 3',
           predictedMove: 8,
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           timestamp: 1614144796858,
           dancerIds: '2 1 3',
           predictedMove: 7,
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           timestamp: 1614144796888,
           dancerIds: '2 3 1',
           predictedMove: 5,
           syncDelay: 0.4,
           accuracy: 70,
       },
       {
           timestamp: 1614144796918,
           dancerIds: '3 1 2',
           predictedMove: 5,
           syncDelay: 0.1,
           accuracy: 30,
       },
       {
           timestamp: 1614144796948,
           dancerIds: '1 2 3',
           predictedMove: 3,
           syncDelay: 0.5,
           accuracy: 60,
       },
    ]
   
   const csvWriter = createCsvWriter({
       path: 'raw_results.csv',
       header: [ 'timestamp', 'dancerIds', 'predictedMove', 'syncDelay', 'accuracy']
   });
   
   csvWriter.writeRecords(data)
       .then(() => console.log('Raw Data csv file written'));
}

module.exports = generateResults;
