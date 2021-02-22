const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
}

const generateAccessToken = (payload) => {
    return jwt.sign(payload, secret);
}

const decodeAccessToken = (token) => {
    return jwt.verify(token, secret);
}

module.exports = {
    hashPassword,
    generateAccessToken,
    decodeAccessToken,
}