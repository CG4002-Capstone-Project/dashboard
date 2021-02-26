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
    }
});
// socketio 

// io.of('api/socket')
io.on("connection", (socket) => {
    console.log("socket.io: User Connected ", socket.id);

    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id);
    })
})

io.emit("newResult", {hello: 'hello'});

// database
const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Cluster');

    console.log('Setting change streams');

    const resultsChangeStreams = db.collection("raw_results").watch();
    const dataChangeStreams = db.collection("raw_datas").watch();

    resultsChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":
                const result = {
                    timestamp: change.fullDocument.timestamps,
                    dancerIds: change.fullDocument.dancerIds,
                    predictedMoves: change.fullDocument.predictedMoves,
                    syncDelay: change.fullDocument.syncDelay,
                    accuracy: change.fullDocument.accuracy,
                }
                console.log('result: ' + JSON.stringify(result));
                io.emit("newResult", result);
        }
    })

    let i = 0;
    dataChangeStreams.on("change", (change) => {
        switch (change.operationType) {
            case "insert":
                const data = {
                    timestamp: change.fullDocument.timestamp,
                    yaw: change.fullDocument.yaw,
                    pitch: change.fullDocument.pitch,
                    roll: change.fullDocument.roll,
                    accx: change.fullDocument.accx,
                    accy: change.fullDocument.accy,
                    accz: change.fullDocument.accz,
                }

                if (i%100 == 0) {
                    console.log(`${i}th data: ` + JSON.stringify(data));
                }
                i += 1;

                if (change.fullDocument.trainee_id == '1') {
                    io.emit("onNewTraineeOneData", data);
                } else if (change.fullDocument.trainee_id == '2') {
                    io.emit("onNewTraineeTwoData", data)
                } else if (change.fullDocument.trainee_id == '3') {
                    console.log('here');
                    io.emit("onNewTraineeThreeData", data);
                }
        }
    })
})

app.use('/login', Login); // used to be app
app.use('/register', Registration); // used to be app

module.exports = server; // used to be app