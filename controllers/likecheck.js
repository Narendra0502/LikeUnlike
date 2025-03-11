const post=require('../models/postmodel');
const likes=require('../models/likemodel');

exports.likepost=async(req,res)=>{
    try{
        const {post,user}=req.body;
        const like=new likes({
            post,user,
        });
        const savedlike=await like.save();
        const updatedpost=await post.findbyid(post,{$push:{likes:savedlike._id}},{new:true});
        res.json({
            post:updatedpost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error aa raha hai",
        });
    }
}
exports.unlikepost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletelike=await likes.findoneAndDelete({post:post,_id:like});
    
        const updatedpost=await post.findbyidandupdate(post,{$pull:{likes:deletelike._id}},{new:true});
        res.json({
            post:updatedpost,
        });
    }
    catch(err){
        return res.status(500).json({
            error:"Error aa raha hai",
        });
    }
}