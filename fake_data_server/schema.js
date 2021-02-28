const mongoose = require('mongoose');

const rawDataSchema = new mongoose.Schema({
    trainee_id: { type: String, required: true, trim: true },
    yaw: { type: String, required: true, trim: true },
    pitch: { type: String, required: true, trim: true  },
    roll: { type: String, required: true, trim: true  },
    accx: { type: String, required: true, trim: true  },
    accy: { type: String, required: true, trim: true  },
    accz: { type: String, required: true, trim: true  },
    timestamp: { type: String, default: Date.now() },
})

const RawDataModel = mongoose.model('raw_data', rawDataSchema);

const rawResultsSchema = new mongoose.Schema({
    timestamp: { type: String, default: Date.now() },
    dancerIds: { type: String, required: true, trim: true },
    correctDancerIds: { type: String, required: true, trim: true },
    predictedMove: { type: String, required: true, trim: true  },
    syncDelay: { type: String, required: true, trim: true  },
    accuracy: { type: String, required: true, trim: true  },
})

const RawResultModel = mongoose.model('raw_result', rawResultsSchema);

module.exports = {
    RawDataModel,
    RawResultModel
}