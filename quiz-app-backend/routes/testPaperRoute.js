const express = require("express");
const testpaperRoute = express.Router();

const TestPapers = require("../models/testPapers");
const auth = require("../middlewares/auth");

// Get all test papers of a test series
testpaperRoute.get("/testseries/:id" ,async (req, res) => {
  try {
    const papers = await TestPapers.find({
      testSeriesId : req.params.id,
    });

    res.json(papers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = testpaperRoute;