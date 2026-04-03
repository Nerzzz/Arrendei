const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Post = require("../models/post.js")

router.get("/", async (req, res) => {
     try{
          const posts = await Post.find()
          res.json(posts)
     } catch(err){
          res.status(500).json({message:err.message})
     }
})

router.get("/user/:userUid", async (req, res) =>{
     const userUid = req.params.userUid

     try{
          const posts = await Post.find({userUid})
          res.json(posts)

          if(!post){
            return res.status(404).json({message:"posts não encontrados"})
        }
     } catch(err){
          res.status(500).json({message: err.message})
     }
})

router.get("/:postId", async (req, res) =>{
     const postId = req.params.postId

     if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ message: "id inválido" })
    }

     try{
          const post = await Post.findById(postId)
          res.json(post)

          if(!post){
            return res.status(404).json({message:"post não encontrado"})
        }
     } catch(err){
          res.status(500).json({message: err.message})
     }
})

router.post("/", async (req, res) =>{
     const post = new Post({
          userUid:req.body.userUid,
          post:{
               title:req.body.title,
               desc:req.body.desc,
               type:req.body.type,
               images:req.body.images
          }
     })

     try{
        const newPost = await post.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

module.exports = router