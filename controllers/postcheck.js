const Post = require('../models/postmodel');

exports.createpost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const post = new Post({ title, body });
        const savedpost = await post.save();

        res.json({
            post: savedpost,
            message: 'Post created successfully',
        });
    } catch (err) {
        console.error("Error in saving post:", err);
        return res.status(400).json({
            error: "Error in saving post",
            details: err.message,
        });
    }
};

exports.getallpost=async(req,res)=>{
    try {
        const post=(await Post.find()
        .populate('likes')).populate('comments').exec();
        res.json({
            post,
        });
}
catch (err){
    return res.status(400).json({
        error:"Error in fetching post",
    });
}
};