const UserModel = require('../schemas/user-schema');




const UserCreate = () => {
    const userInstance = new UserModel({ name: 'test5', email: 'jadc@jelo.com', username: 'tt5', password: 'cadfff' });
    userInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('saved!');
        }
    })
}

module.exports = UserCreate;