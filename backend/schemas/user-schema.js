const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true  },
    password: { type: String, required: true, unique: true, trim: true  },
    role: { type: String, enum: ['coach', 'trainee'] },
    createdAt: { type: Date, default: Date.now() },
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

