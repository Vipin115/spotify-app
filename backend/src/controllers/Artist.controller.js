const express = require("express");

const Artist = require("../models/Artist.model")
const router = express.Router()

router.post("",async (req,res)=>{
    try{
        const artData = await Artist.create(req.body)
        return res.send(artData)
    }
    catch(err){
        return res.send(err.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const artData = await Artist.find().lean().exec()
        return res.send(artData)
    }
    catch(err){
        return res.send(err.message)
    }
})