const express = require("express");
const testreviewRouter = express.Router() ;
const TestAttempt = require("../models/testAttempt");

testreviewRouter.get("/review/:attemptId", async (req, res) => {
  try {
    const attempt = await TestAttempt.findById(
      req.params.attemptId
    ).populate("testPaperId");

    if (!attempt) {
      return res.status(404).json({
        message: "Attempt not found",
      });
    }

    res.json({
      questions: attempt.testPaperId.questions,
      answers: attempt.answers,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = testreviewRouter ;