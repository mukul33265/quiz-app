const express = require('express');
const testPortalRouter = express.Router() ;
const TestPapers = require("../models/testPapers");
const auth = require('../middlewares/auth');

testPortalRouter.get('/testpaper/:id', auth,async (req,res) => {
    try {
        const paper = await TestPapers.findById(req.params.id);
        if (!paper) {
        return res.status(404).json({
            message: "Paper not found"
        });
        }
        res.json({
            questions: paper.questions,
            durationSeconds: paper.durationSeconds
        });
    }
    catch(err){
        console.log(err)
    }
})
module.exports = testPortalRouter ;