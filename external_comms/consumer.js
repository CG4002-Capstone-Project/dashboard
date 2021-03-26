require('dotenv').config();
const amqp = require('amqplib/callback_api');
const mongoose = require('mongoose');
const { TraineeOneDataModel, TraineeTwoDataModel, TraineeThreeDataModel, RawEMGModel, RawResultModel } = require('./schema');


const CLOUD_AMQP_URL = process.env.CLOUDAMQP_URL;

const connectToDb = async () => {
  const URI = process.env.MONGO_DB_LOCAL_URI;
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
      console.log('Connected to Jeevz MongoDB Local');
  })
}

connectToDb();

amqp.connect(CLOUD_AMQP_URL, async function(error0, connection) {
  if (error0) {
    throw error0;
  }

  let traineeOneDocumentArray = [];
  let traineeTwoDocumentArray = [];
  let traineeThreeDocumentArray = [];

  let traineeOneDocumentBatchCount = 0;
  let traineeTwoDocumentBatchCount = 0;
  let traineeThreeDocumentBatchCount = 0;
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_one_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      //const mode = rawDataArray[0];
      const yaw = rawDataArray[0];
      const pitch = rawDataArray[1];
      const roll = rawDataArray[2];
      const accx = rawDataArray[3];
      const accy = rawDataArray[4];
      const accz = rawDataArray[5];
      // console.log('Mode: ' + mode);
      console.log('Dancer ID: ' + dancerId);
      console.log('Timestamp: ' + timestamp);
      console.log('Raw Data: ' + rawDataArray);
      console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeOneDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });
      // console.log(dataInstance);
      traineeOneDocumentArray.push(dataInstance);

      if (traineeOneDocumentArray.length == 10) {
        traineeOneDocumentBatchCount += 1;
        TraineeOneDataModel.insertMany(traineeOneDocumentArray).then((err, docs) => {
          if (err) {
            console.log('Error occured in batch insert for T1 documents');
          }
          console.log(`${traineeOneDocumentBatchCount} t1 documents sent to db in batch`)
        })

        traineeOneDocumentArray = [];
      }
    //   dataInstance.save((err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(`t1 data instance sent to db`)
    //     }
    //   })
    }, {
      noAck: true
    });
  });

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_two_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      // const mode = rawDataArray[0];
      const yaw = rawDataArray[0];
      const pitch = rawDataArray[1];
      const roll = rawDataArray[2];
      const accx = rawDataArray[3];
      const accy = rawDataArray[4];
      const accz = rawDataArray[5];
      // console.log('Mode: ' + mode);
      console.log('Dancer ID: ' + dancerId);
      console.log('Timestamp: ' + timestamp);
      console.log('Raw Data: ' + rawDataArray);
      console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeTwoDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });
      // console.log(dataInstance);
      traineeTwoDocumentArray.push(dataInstance);

      if (traineeTwoDocumentArray.length == 10) {
        traineeTwoDocumentBatchCount += 1;
        TraineeTwoDataModel.insertMany(traineeTwoDocumentArray).then((err, docs) => {
          if (err) {
            console.log('Error occured in batch insert for T2 documents');
          }
          console.log(`${traineeTwoDocumentBatchCount} t2 documents sent to db in batch`)
        })

        traineeTwoDocumentArray = [];
      }

    //   dataInstance.save((err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(`t2 data instance sent to db`)
    //     }
    //   })
    }, {
      noAck: true
    });
  });

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_three_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      // const mode = rawDataArray[0];
      const yaw = rawDataArray[1];
      const pitch = rawDataArray[2];
      const roll = rawDataArray[3];
      const accx = rawDataArray[4];
      const accy = rawDataArray[5];
      const accz = rawDataArray[6];
      // console.log('Mode: ' + mode);
      console.log('Dancer ID: ' + dancerId);
      console.log('Timestamp: ' + timestamp);
      console.log('Raw Data: ' + rawDataArray);
      console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeThreeDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });
      // console.log(dataInstance);
      traineeThreeDocumentArray.push(dataInstance);

      if (traineeThreeDocumentArray.length == 10) {
        traineeThreeDocumentBatchCount += 1;
        TraineeThreeDataModel.insertMany(traineeThreeDocumentArray).then((err, docs) => {
          if (err) {
            console.log('Error occured in batch insert for T3 documents');
          }
          console.log(`${traineeThreeDocumentBatchCount} t3 documents sent to db in batch`)
        })

        traineeThreeDocumentArray = [];
      }

      // dataInstance.save((err) => {
      //   if (err) {
      //       console.log(err);
      //   } else {
      //       console.log(`t3 data instance sent to db`)
      //   }
      // })
    }, {
      noAck: true
    });
  });

  // assume msg to be of the format: timestamp | emg 
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'emg';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const timestamp = stringMsgArray[0].trim();
      const emgDataString = stringMsgArray[1].trim();

      const emgDataArray = emgDataString.split(' ');
      const voltage = emgDataArray[0];
      const rms = emgDataArray[1];
      const mfq = emgDataArray[2];

      console.log('Timestamp: ' + timestamp);
      console.log('EMG Voltage: ' + voltage);
      console.log('EMG RMS: ' + rms);
      console.log('EMG MFQ: ' + mfq);

      console.log(" [Emg] Received %s", stringMsg);

      const emgInstance = new RawEMGModel({ 
        timestamp,
        voltage,
        rms,
        mfq,
      });

      emgInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`emg instance sent to db`)
        }
      })
    }, {
      noAck: true
    });
  })

  // assume msg to be of the format: predictedMove 
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'results';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const predictedMove = stringMsg.trim();

      console.log('Predicted Move: ' + predictedMove);

      const resultInstance = new RawResultModel({ 
        predictedMove
      });

      resultInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`result instance sent to db`)
        }
      })
    }, {
      noAck: true
    });
  })
});