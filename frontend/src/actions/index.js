const addTraineeOneData = (data) => {
    return {
        type: 'TRAINEE_ONE_DATA',
        payload: {
            timestamp: data.timestamp,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addTraineeTwoData = (data) => {
    return {
        type: 'TRAINEE_TWO_DATA',
        payload: {
            timestamp: data.timestamp,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addTraineeThreeData = (data) => {
    return {
        type: 'TRAINEE_THREE_DATA',
        payload: {
            timestamp: data.timestamp,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addSyncDelay = (data) => {
    return {
        type: 'SYNC_DELAY',
        payload: {
            syncDelay: data.syncDelay
        }
    }
}

const addPredictedMove = (data) => {
    return {
        type: 'PREDICTED_MOVE',
        payload: {
            predictedMove: data.predictedMove
        }
    }
}

const addDancerIds = (data) => {
    return {
        type: 'DANCER_IDS',
        payload: {
            dancerIds: data.dancerIds,
        }
    }
}

const addAccuracy = (data) => {
    return {
        type: 'ACCURACY',
        payload: {
            accuracy: data.accuracy,
        }
    }
}

module.exports = {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData,
    addSyncDelay,
    addPredictedMove,
    addDancerIds,
    addAccuracy
}