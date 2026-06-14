const express = require("express");
const myAttemptRouter = express.Router() ;
const auth = require("../middlewares/auth");
const TestAttempt = require("../models/testAttempt"); 
const hasAnyPurchase = require("../middlewares/hasPurchase");

myAttemptRouter.get("/my-attempt" , auth , hasAnyPurchase ,async (req,res) => {

    try{
        const attempts = await  TestAttempt.find({userId : req.user.userId})
        .populate("testPaperId", "title")
        .sort({ createdAt: -1 })

        res.status(200).json(attempts) ;
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message : "Failed to fetch attempts ",
        })
    }
}
 )

module.exports = myAttemptRouter ;