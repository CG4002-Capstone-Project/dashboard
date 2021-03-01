const randomFloat = require('random-floating');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Creating EMG values for 5 mins
 */

function generateRawEMG() {
    let emgValues = [];
    for (let i = 0;i < 900; i++) {
   
       const value = randomFloat({min: 0, max: 5, fixed: 2});

       const data = {
           emgValue: value
       }
       emgValues.push(data);
    }
   
   const csvWriter = createCsvWriter({
       path: 'raw_emg.csv',
       header: [ 'emgValue']
   });
   
   csvWriter.writeRecords(emgValues)
       .then(() => console.log('Raw EMG csv file written'));
 }

module.exports = generateRawEMG;