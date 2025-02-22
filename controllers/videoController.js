const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
    const videos = await Video.find().populate('category');
    res.json(videos);
};

exports.createVideo = async (req, res) => {
    try {
        const { title, description, category, videourl, thumbnail } = req.body;
        console.log("inside video ")
        const video = new Video({ title, description, category, videourl, thumbnail });
        await video.save();
        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error creating video', error });
    }
};

exports.updateVideo = async (req, res) => {
    console.log("inside update video");

    const { title, description, category, videourl, thumbnail } = req.body;

    try {
        // Update video
        const video = await Video.findByIdAndUpdate(
            req.params.id,
            { title, description, category, videourl, thumbnail },
            { new: true }  // Return the updated video
        );

        // If video is not found, send 404
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        // Send back the updated video
        res.json(video);
    } catch (error) {
        console.error("Error updating video:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const mongoose = require('mongoose');
exports.deleteVideo = async (req, res) => {
    const { id } = req.params;
    
    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid video ID' });
    }

    try {
        const video = await Video.findByIdAndDelete(id);

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.json({ message: 'Video deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting video' });
    }
};

