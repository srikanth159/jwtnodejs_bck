const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    videourl: { type: String, required: true },
    thumbnail: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('video', videoSchema);


