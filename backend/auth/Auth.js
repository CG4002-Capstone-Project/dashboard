const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const authChecker = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        const {email, role} = decodeAccessToken(accessToken);
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
}