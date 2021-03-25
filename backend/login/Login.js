const _ = require('lodash');

const { hashPassword, generateAccessToken } = require('../auth/Auth');
const AccessLogModel = require('../schemas/access-log-schema');
const UserModel = require('../schemas/user-schema');

const createLogInstance = async (email, role, accessToken) => {
    // console.log('logging instance', email, role, accessToken);
    const logInstance = new AccessLogModel({ email, role, timestamp: Date.now(), accessToken });
    await logInstance.save((err) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log(`${email} login saved!`);
        }
    })
} 

const findUserCredentials = async (email, password) => {
    UserModel.find({ email, password }, (err, docs) => {
        if (err) {
            return false
        } else {
            return true;
        }
    })
}


module.exports = {
    createLogInstance,
    findUserCredentials
}


