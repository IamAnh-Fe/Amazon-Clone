const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.30iwhoy.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );

        console.log('MongoDB connected');
    } catch (error) {
        console.log('error message:', error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
