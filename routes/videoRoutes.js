//const express = require('express');
// const { getVideos, createVideo, updateVideo, deleteVideo } = require('../controllers/videoController');
// const protect = require('../middleware/authMiddleware');

// const router = express.Router();

// router.get('/',  getVideos);
// router.post('/', createVideo);
// router.put('/:id', updateVideo);
// router.delete('/:id', deleteVideo);

// module.exports = router;
const express = require("express");
const { createVideo,getVideos,updateVideo,deleteVideo} = require("../controllers/videoController");

const router = express.Router();

// Define routes with valid callback functions
router.get("/videos",getVideos);  // Ensure getAllVideos is defined
router.post("/", createVideo);  // Ensure createVideo is defined
router.put("/videos/:id",updateVideo);
router.delete("/videos/:id",deleteVideo);
module.exports = router;
