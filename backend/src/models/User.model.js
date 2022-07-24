const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true },
        email: { type: String, required: true },
        song_id: {type: Mongoose.Schema.Types.ObjectId, ref: 'songs'}
       
        
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const userData = mongoose.model("user", userSchema);

module.exports = userData;