const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Login = require('./login/LoginController');
const Registration = require('./registration/RegistrationController');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json()); // used to be app
app.use(cors()); // used to be app
app.options('*', cors());

// cors issue: https://stackoverflow.com/questions/58914404/socket-io-cors-error-by-using-node-react-and-socket-io
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', "POST"],
        credentials: true,
    },
    pingTimeout: 25000,
    pingInterval: 10000,
});
// socketio 

// io.of('api/socket')
io.on("connection", (socket) => {
    console.log("socket.io: Backend Connected to Frontend", socket.id);

    socket.on("disconnect", (reason) => {
        console.log("socket.io: Backend disconnected: ", socket.id);
        console.log("socket.io: Backend disconnected. Reason: ", reason);
    })
})


// database
const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_LOCAL_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Local');

    console.log('Setting change streams');

    const resultsChangeStreams = db.collection("raw_results").watch();
    const dataChangeStreams = db.collection("raw_datas").watch();
    const emgChangeStreams = db.collection("raw_emgs").watch();

    resultsChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":
                const result = {
                    // timestamp: change.fullDocument.timestamp,
                    // dancerIds: change.fullDocument.dancerIds,
                    // correctDancerIds: change.fullDocument.correctDancerIds,
                    predictedMove: change.fullDocument.predictedMove,
                    // syncDelay: change.fullDocument.syncDelay,
                    // accuracy: change.fullDocument.accuracy,
                }
                console.log('result: ' + JSON.stringify(result));
                io.emit("newResult", result);
        }
    })

    let i = 1;
    let tempTimestamp = 0;
    let tempYaw = 0;
    let tempPitch = 0;
    let tempRoll = 0;
    let tempAccx = 0;
    let tempAccy = 0;
    let tempAccz = 0;

    dataChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":

                const data = {
                    timestamp: change.fullDocument.timestamp,
                    mode: change.fullDocument.mode,
                    yaw: change.fullDocument.yaw,
                    pitch: change.fullDocument.pitch,
                    roll: change.fullDocument.roll,
                    accx: change.fullDocument.accx,
                    accy: change.fullDocument.accy,
                    accz: change.fullDocument.accz,
                }

                // tempTimestamp += Number(data.timestamp);
                tempAccx += Number(data.accx);
                tempAccy += Number(data.accy);
                tempAccz += Number(data.accz);
                tempYaw += Number(data.yaw);
                tempPitch += Number(data.pitch);
                tempRoll += Number(data.roll);

                // console.log(`${i}th data: ${tempAccx}`);
                if (i%10 == 0) {
                    // tempTimestamp = tempTimestamp / 100;
                    tempAccx = tempAccx / 10;
                    tempAccy = tempAccy / 10;
                    tempAccz = tempAccz / 10;
                    tempYaw = tempYaw / 10;
                    tempPitch = tempPitch / 10;
                    tempRoll = tempRoll / 10;

                    const finalisedData = {
                        timestamp: data.timestamp,
                        accx: tempAccx,
                        accy: tempAccy,
                        accz: tempAccz,
                        yaw: tempYaw,
                        pitch: tempPitch,
                        roll: tempRoll,
                        mode: data.mode
                    }
                    
                    console.log(`${i}th data: ` + JSON.stringify(finalisedData));

                    if (change.fullDocument.trainee_id == '0') {
                        io.emit("onNewTraineeOneData", finalisedData);
                    } else if (change.fullDocument.trainee_id == '1') {
                        io.emit("onNewTraineeTwoData", finalisedData)
                    } else if (change.fullDocument.trainee_id == '2') {
                        io.emit("onNewTraineeThreeData", finalisedData);
                    }

                    tempTimestamp = 0;
                    tempAccx = 0;
                    tempAccy = 0;
                    tempAccz = 0;
                    tempYaw = 0;
                    tempPitch = 0;
                    tempRoll = 0;
                }
                i += 1;
        }
    })

    let j = 0;
    emgChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":
                const emg = {
                    timestamp: change.fullDocument.timestamp,
                    voltage: change.fullDocument.voltage,
                    rms: change.fullDocument.rms,
                    mfq: change.fullDocument.mfq,
                }

                if (j%100 == 0) {
                    console.log(`${j}th emg: ` + JSON.stringify(emg));
                }
                j += 1;
                io.emit("newEMG", emg);
        }
    })
})

app.use('/login', Login); // used to be app
app.use('/register', Registration); // used to be app

module.exports = server; // used to be app