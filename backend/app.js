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

// helper function 

function transposeMoves(move) {
    if (move == 'dab') {
        return 0;
    } else if (move == 'elbowkick') {
        return 1;
    } else if (move == 'gun') {
        return 2;
    } else if (move == 'hair') {
        return 3;
    } else if (move == 'listen') {
        return 4;
    } else if (move == 'pointhigh') {
        return 5;
    } else if (move == 'sidepump') {
        return 6;
    } else if (move == 'wipetable') {
        return 7;
    }
}

// database
const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_LOCAL_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to Jeevz MongoDB Local');

    // clear collections 
    console.log('Deleting Collections');
    await db.dropCollection("raw_results");
    await db.dropCollection("raw_trainee_one_datas");
    await db.dropCollection("raw_trainee_two_datas");
    await db.dropCollection("raw_trainee_three_datas");
    await db.dropCollection("raw_emgs");
    console.log('DELETED Collections ');

    // add collections 
    console.log('Creating Collections');
    await db.createCollection("raw_results");
    await db.createCollection("raw_trainee_one_datas");
    await db.createCollection("raw_trainee_two_datas");
    await db.createCollection("raw_trainee_three_datas");
    await db.createCollection("raw_emgs");
    console.log("CREATED Collections")

    console.log('Setting change streams');

    const resultsChangeStreams = db.collection("raw_results").watch();
    const traineeOneChangeStreams = db.collection("raw_trainee_one_datas").watch();
    const traineeTwoChangeStreams = db.collection("raw_trainee_two_datas").watch();
    const traineeThreeChangeStreams = db.collection("raw_trainee_three_datas").watch();
    const emgChangeStreams = db.collection("raw_emgs").watch();

    resultsChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":
                const move = transposeMoves(change.fullDocument.predictedMove);
                const result = {
                    timestamp: change.fullDocument.timestamp,
                    dancerIds: change.fullDocument.dancerIds,
                    correctDancerIds: change.fullDocument.correctDancerIds,
                    predictedMove: move,
                    syncDelay: change.fullDocument.syncDelay,
                    accuracy: change.fullDocument.accuracy,
                }
                console.log('result: ' + JSON.stringify(result));
                io.emit("newResult", result);
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

    let i = 1;
    let tempT1Yaw = 0;
    let tempT1Pitch = 0;
    let tempT1Roll = 0;
    let tempT1Accx = 0;
    let tempT1Accy = 0;
    let tempT1Accz = 0;

    traineeOneChangeStreams.on("change", (change) => {
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
                tempT1Accx += Number(data.accx);
                tempT1Accy += Number(data.accy);
                tempT1Accz += Number(data.accz);
                tempT1Yaw += Number(data.yaw);
                tempT1Pitch += Number(data.pitch);
                tempT1Roll += Number(data.roll);

                // console.log(`${i}th data: ${tempAccx}`);
                if (i%10 == 0) {
                    // tempTimestamp = tempTimestamp / 100;
                    tempT1Accx = tempT1Accx / 10;
                    tempT1Accy = tempT1Accy / 10;
                    tempT1Accz = tempT1Accz / 10;
                    tempT1Yaw = tempT1Yaw / 10;
                    tempT1Pitch = tempT1Pitch / 10;
                    tempT1Roll = tempT1Roll / 10;

                    const finalisedData = {
                        timestamp: data.timestamp,
                        accx: tempT1Accx,
                        accy: tempT1Accy,
                        accz: tempT1Accz,
                        yaw: tempT1Yaw,
                        pitch: tempT1Pitch,
                        roll: tempT1Roll,
                        mode: data.mode
                    }
                    
                    console.log(`T1 ${i}th data: ` + JSON.stringify(finalisedData));
                    io.emit("onNewTraineeOneData", finalisedData);

                    tempT1Accx = 0;
                    tempT1Accy = 0;
                    tempT1Accz = 0;
                    tempT1Yaw = 0;
                    tempT1Pitch = 0;
                    tempT1Roll = 0;
                }
                i += 1;
        }
    })

    let k = 1;
    let tempT2Yaw = 0;
    let tempT2Pitch = 0;
    let tempT2Roll = 0;
    let tempT2Accx = 0;
    let tempT2Accy = 0;
    let tempT2Accz = 0;

    traineeTwoChangeStreams.on("change", (change) => {
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
                tempT2Accx += Number(data.accx);
                tempT2Accy += Number(data.accy);
                tempT2Accz += Number(data.accz);
                tempT2Yaw += Number(data.yaw);
                tempT2Pitch += Number(data.pitch);
                tempT2Roll += Number(data.roll);

                // console.log(`${i}th data: ${tempAccx}`);
                if (i%10 == 0) {
                    tempT2Accx = tempT2Accx / 10;
                    tempT2Accy = tempT2Accy / 10;
                    tempT2Accz = tempT2Accz / 10;
                    tempT2Yaw = tempT2Yaw / 10;
                    tempT2Pitch = tempT2Pitch / 10;
                    tempT2Roll = tempT2Roll / 10;

                    const finalisedData = {
                        timestamp: data.timestamp,
                        accx: tempT2Accx,
                        accy: tempT2Accy,
                        accz: tempT2Accz,
                        yaw: tempT2Yaw,
                        pitch: tempT2Pitch,
                        roll: tempT2Roll,
                        mode: data.mode
                    }
                    
                    console.log(`T2 ${k}th data: ` + JSON.stringify(finalisedData));
                    io.emit("onNewTraineeTwoData", finalisedData);

                    tempT2Accx = 0;
                    tempT2Accy = 0;
                    tempT2Accz = 0;
                    tempT2Yaw = 0;
                    tempT2Pitch = 0;
                    tempT2Roll = 0;
                }
                k += 1;
        }
    })

    let m = 1;
    let tempT3Yaw = 0;
    let tempT3Pitch = 0;
    let tempT3Roll = 0;
    let tempT3Accx = 0;
    let tempT3Accy = 0;
    let tempT3Accz = 0;

    traineeThreeChangeStreams.on("change", (change) => {
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
                tempT3Accx += Number(data.accx);
                tempT3Accy += Number(data.accy);
                tempT3Accz += Number(data.accz);
                tempT3Yaw += Number(data.yaw);
                tempT3Pitch += Number(data.pitch);
                tempT3Roll += Number(data.roll);

                // console.log(`${i}th data: ${tempAccx}`);
                if (i%10 == 0) {
                    // tempTimestamp = tempTimestamp / 100;
                    tempT3Accx = tempT3Accx / 10;
                    tempT3Accy = tempT3Accy / 10;
                    tempT3Accz = tempT3Accz / 10;
                    tempT3Yaw = tempT3Yaw / 10;
                    tempT3Pitch = tempT3Pitch / 10;
                    tempT3Roll = tempT3Roll / 10;

                    const finalisedData = {
                        timestamp: data.timestamp,
                        accx: tempT3Accx,
                        accy: tempT3Accy,
                        accz: tempT3Accz,
                        yaw: tempT3Yaw,
                        pitch: tempT3Pitch,
                        roll: tempT3Roll,
                        mode: data.mode
                    }
                    
                    console.log(`T3 ${m}th data: ` + JSON.stringify(finalisedData));
                    io.emit("onNewTraineeThreeData", finalisedData);

                    tempT3Accx = 0;
                    tempT3Accy = 0;
                    tempT3Accz = 0;
                    tempT3Yaw = 0;
                    tempT3Pitch = 0;
                    tempT3Roll = 0;
                }
                m += 1;
        }
    })


})

app.use('/login', Login); // used to be app
app.use('/register', Registration); // used to be app

module.exports = server; // used to be app