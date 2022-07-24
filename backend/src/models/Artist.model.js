const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true },
        dob: { type: Number, required: true },
        bio: {type: String,required: true },
        song_id: [{type: Mongoose.Schema.Types.ObjectId, ref: 'songs'}]       
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const artistData = mongoose.model("artist", artistSchema);

module.exports = artistData;