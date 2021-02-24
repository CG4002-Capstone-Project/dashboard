require('dotenv').config();
const generateRawData = require('./raw_data_generator');
const generateResults = require('./raw_results_generator');

// generateRawData();
// generateResults();

const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Jeevz MongoDB Cluster');
})
