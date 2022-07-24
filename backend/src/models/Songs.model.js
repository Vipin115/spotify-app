const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true },
        date_of_release: { type: Number, required: true },
        image: {type: String,required: true },
        artist_id: [{type: Mongoose.Schema.Types.ObjectId, ref: 'artist'}]
        
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const songData = mongoose.model("songs", songSchema);

module.exports = songData;