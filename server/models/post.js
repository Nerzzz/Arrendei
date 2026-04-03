const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
     userUid:{
          type: String,
          required: true
     },
     post:{
          title:{
               type: String,
               required: true
          },
          desc:{
               type: String,
               required: true
          },
          createdAt:{
               type: Date,
               required: false,
               default: Date.now
          },
          isRent:{
               type: Boolean,
               required: true,
               default: false
          },
          type:{
               type: String,
               required: true
          },
          views:{
               type: Number,
               required: false,
               default: 0
          },
          likes:{
               type: Number,
               required: false,
               default: 0
          },
          images:{
               type: [String],
               required: true
          },
     },
})

module.exports = mongoose.model("Post", postSchema)