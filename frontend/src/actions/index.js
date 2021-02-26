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

module.exports = {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData
}