const express = require('express');
const router = express.Router();

const { commentcheck } = require("../controllers/commentcheck");
const { likepost,unlikepost} =require("../controllers/likecheck");
const { createpost,getallpost } = require("../controllers/postcheck");

router.post("/comment/create", commentcheck);
router.post("/posts/create", createpost);
router.get("/posts",getallpost);
router.post("/likes",likepost);
router.post("/unlikes",unlikepost);


module.exports = router;
