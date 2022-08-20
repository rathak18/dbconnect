const express = require('express');
const router = express.Router();
const Post = require('../models/post')


router.get("/", async (req,res) =>{
    try{
    const posts = await Post.find();
    res.json(posts);
    } catch(err){
      res.json({message: err.message});
    }
})

router.get('/:postId',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message:error});
    }
  
})



router.post("/", async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,

    });
    console.log(post);
    try{
    const savedPost = await post.save()
    console.log(savedPost);
    res.json(savedPost);
    }catch(err){
     res.json({message : err.message});
    }
});


// delete specfic user
router.delete('/:postId', async(req,res) =>{
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId }) 
        res.json(removedPost);
        console.log(removedPost);
    } catch (error) {
        res.json({error:message});
        
    }
  })
  
  // Update specific User
  
  router.patch('/:postId', async(req,res) =>{
    try {
        const updatePost = await Post.updateOne({_id : req.params.postId}, {$set : {name: req.body.title}});
        res.json(updatePost);     
    } catch (error) {
        res.json({error:message});
    }
  })

module.exports = router;