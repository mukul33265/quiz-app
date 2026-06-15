const express = require("express");
const feedbackRouter = express.Router();

const auth = require("../middlewares/auth");
const Feedback = require("../models/feedback");

feedbackRouter.post("/feedback", auth,async (req, res) => {
  try {
    const { email, feedbackGiven } = req.body;
    if (!email || !feedbackGiven) {
      return res.status(400).json({
        message: "Email and feedback are required",
      });
    }
    await Feedback.create({
      email,
      feedback: feedbackGiven,
    });
    res.status(201).json({
      message: "Feedback submitted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to submit feedback",
    });
  }
});

module.exports = feedbackRouter;