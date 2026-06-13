const express = require("express");
const testAttemptRouter = express.Router() ;
const TestAttempt = require("../models/testAttempt");
const auth = require("../middlewares/auth");

testAttemptRouter.get("/result/:attemptId" ,auth, async(req,res) => {
    try{
        const attempt = await TestAttempt.findById(req.params.attemptId);
        if (!attempt) {
            return res.status(404).json({ message: "Attempt not found" });
        }
        // Security: Verify the attempt belongs to the authenticated user
        if (attempt.userId.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Unauthorized access" });
        }
        res.json(attempt) ;
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = testAttemptRouter ;