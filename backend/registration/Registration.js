const UserModel = require('../schemas/user-schema');
const _ = require('lodash');

const { hashPassword, generateAccessToken } = require('../auth/Auth');

const UserCreate = async (body) => {

    for (let key of Object.keys(body)) {
        const hashedPassword = await hashPassword(body[key].password);
        const userInstance = new UserModel({ name: body[key].name, email: body[key].email, username: body[key].username, password: hashedPassword, role: body[key].role });
        userInstance.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`${key} saved!`);
            }
        })
    }

    const token = generateAccessToken({ email: body['coach'].email, role: body['coach'].role });
    console.log(`token: ${token}`);
    return { accessToken: token };
}


module.exports = UserCreate;