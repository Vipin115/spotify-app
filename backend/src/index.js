const express = require("express");

const connect = require("./configs/db")

const artistController = require("./controllers/Artist.controller")
const songsController = require("./controllers/Songs.controller");
const userController = require("./controllers/User.controller");

const app = express();
app.use(express.json());

app.use("/artist",artistController)
app.use("/songs",songsController)
app.use("/user",userController)

app.listen(8080, async ()=>{
    try{
        await connect()
    }
    catch(e){
        console.log(e.message)
    }
    console.log("listening on port 8080")
})
