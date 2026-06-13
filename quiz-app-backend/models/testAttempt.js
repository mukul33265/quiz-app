const mongoose = require("mongoose");

const testAttemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    testPaperId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestPapers",
      required: true,
    },

    answers: {
      type: Map,
      of: Number,
      default: {},
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    attemptedQuestions: {
      type: Number,
      required: true,
    },

    correctAnswers: {
      type: Number,
      required: true,
    },

    wrongAnswers: {
      type: Number,
      required: true,
    },

    unattemptedQuestions: {
      type: Number,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },

    accuracy: {
      type: Number,
      required: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TestAttempt", testAttemptSchema);