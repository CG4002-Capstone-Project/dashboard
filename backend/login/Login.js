const _ = require('lodash');

const { hashPassword, generateAccessToken } = require('../auth/Auth');
const AccessLogModel = require('../schemas/access-log-schema');

const createLogInstance = async (email, role, accessToken) => {
    const logInstance = new AccessLogModel({ email, role, timestamp: Date.now(), accessToken });

    await logInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${email} saved!`);
        }
    })
} 


module.exports = {
    createLogInstance
}


