const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI; // ✅ Get MongoDB URI from .env file
        if (!url) throw new Error("MONGO_URI is not defined in environment variables");

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(' MongoDB connected successfully');
    } catch (error) {
        console.error(' MongoDB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
