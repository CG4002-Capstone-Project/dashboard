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

const verifyUserCredentials = async (body) => {
    let isUserGrantedAccess = false;
    let name = '';
    let role = '';
    let email = '';
    try {
        await UserModel.find({ email: body.email , password: body.password }, (err, docs) => {
            if (err) {
                throw new Error(err);
            }
            // console.log('login docs ', docs);

            if (docs.length = 1) {
                isUserGrantedAccess = true;
                name = docs[0].name;
                role = docs[0].role;
                email = docs[0].email;
            }
        })
    } catch (error) {
        throw new Error(error);
    }

    const response = {
        isUserGrantedAccess,
        name,
        role,
        email
    }
    // console.log('login response', response);
    return response;
}

const createAccessToken = (email, role) => {
    console.log('login create access token ', email , role);
    const token = generateAccessToken(email, role);
    return token;
}

module.exports = {
    createLogInstance,
    verifyUserCredentials,
    createAccessToken
}


