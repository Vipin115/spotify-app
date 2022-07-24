const express = require("express");

const Songs = require("../models/Songs.model")
const router = express.Router()

router.post("",async (req,res)=>{
    try{
        const songData = await Songs.create(req.body)
        return res.send(songData)
    }
    catch(err){
        return res.send(err.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const songData = await Songs.find().lean().exec()
        return res.send(songData)
    }
    catch(err){
        return res.send(err.message)
    }
})