const express = require("express");

const User = require("../models/User.model")
const router = express.Router()

router.post("",async (req,res)=>{
    try{
        const userData = await User.create(req.body)
        return res.send(userData)
    }
    catch(err){
        return res.send(err.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const userData = await User.find().lean().exec()
        return res.send(userData)
    }
    catch(err){
        return res.send(err.message)
    }
})