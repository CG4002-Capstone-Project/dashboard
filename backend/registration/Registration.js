const UserModel = require('../schemas/user-schema');
const _ = require('lodash');

const { hashPassword, generateAccessToken } = require('../auth/Auth');
const CoachTreeModel = require('../schemas/coach-tree-schema');

const UserCreate = async (body) => {

    for (let key of Object.keys(body)) {
        const hashedPassword = await hashPassword(body[key].password);
        const userInstance = new UserModel({ name: body[key].name, email: body[key].email, username: body[key].username, password: hashedPassword, role: body[key].role });
        await userInstance.save((err) => {
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

const CoachTreeCreate = async (body) => {
    const coachTreeInstance = new CoachTreeModel({ 
        coach_username: body['coach'].username, 
        traineeOne_username: body['trainee1'].username,
        traineeTwo_username: body['trainee2'].username,
        traineeThree_username: body['trainee3'].username 
    });

    await coachTreeInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${body['coach'].username} , ${body['trainee1'].username}, ${body['trainee2'].username}, ${body['trainee3'].username} saved!`);
        }
    })
}


module.exports = {
    UserCreate,
    CoachTreeCreate
};