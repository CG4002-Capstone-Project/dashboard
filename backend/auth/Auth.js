const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../schemas/user-schema');

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
}

const generateAccessToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 });
}

const decodeAccessToken = (token) => {
    return jwt.verify(token, secret);
}

const validateUserWithDB = (email, role) => {
    let isUserGrantedAccess = false;
    let role = '';
    let email = '';
    try {
        await UserModel.find({ email, role }, (err, docs) => {
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

    return isUserGrantedAccess;
}

const authChecker = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        const {email, role} = decodeAccessToken(accessToken);
        const isUserAuthorized = validateUserWithDB(email, role);

        if (!isUserAuthorized) {
            return res.json({ error: 'Unauthorized' });
        }

        req.user ={email, role};
        next();
    } catch(e) {
        res.status(401);
        return res.json({ error: 'Unauthorized'});
    }
}

module.exports = {
    hashPassword,
    generateAccessToken,
    decodeAccessToken,
    authChecker
}