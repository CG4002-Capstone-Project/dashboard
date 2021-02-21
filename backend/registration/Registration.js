const UserModel = require('../schemas/user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

const UserCreate = async ({ name, email, username, password }) => {
    const hashedPassword = await hashPassword(password);
    const userInstance = new UserModel({ name, email, username, password: hashedPassword });
    userInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('saved!');
        }
    })
    const token = generateAccessToken({ email });
    return { accessToken: token };
}

const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

const generateAccessToken = (payload) => {
    return jwt.sign(payload, secret);
}

module.exports = UserCreate;