const User = require('../models/user');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const users = require('../data/users');

dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedUsers = async () => {
    try {

        await User.deleteMany();
        console.log('Users are deleted');

        await User.insertMany(users);
        console.log('Users are inserted');

        process.exit();

    } catch(error) {
        console.log(error.message);
        process.exit();
    }
}

seedUsers();