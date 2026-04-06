const cloudinary = require("../config/cloudinary")
const streamifier = require("streamifier")

function uploadToCloudinary(buffer){
     return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
               {folder:"uploads"},
               (err, res) => {
                    if(res) resolve(res)
                    else reject(err)
               }
          )
          streamifier.createReadStream(buffer).pipe(stream)
     })
}

module.exports = uploadToCloudinary