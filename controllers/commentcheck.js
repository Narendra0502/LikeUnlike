const post=require('../models/postmodel');
const like=require('../models/likemodel');
const comment=require('../models/commentmodel');

exports.commentcheck=async(req,res)=>{
    try{
          const {post,user,body}=req.body;
          const comment=new comment({
            post,user,body
          });
          const savedcomment=await comment.save();
          const updatedpost=await post.findbyid(post,{$push:{comments:savedcomment._id}},{new:true})
                   .populate('comments')
                   .exec();
          res.json({
                  post:updatedpost,

          });
    }
    catch(err){
        return res.status(500).json({
            error:"Error in saving comment",
        })
    }
};