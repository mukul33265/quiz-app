const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    id : {type : Number},

    question: { type: String, required: true },

    options: [{ type: String, required: true }],

    correctAnswer: { type: Number, required: true },

    marks: { type: Number, default: 1 },

    negativeMarks: { type: Number, default: 0 },

  },
  
);

const testPaperSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    testSeriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestSeries",
      required: true,
    },

    durationSeconds: { type: Number, required: true },

    totalMarks: { type: Number, default: 0 },

    negativeMarkingEnabled: { type: Boolean, default: true },

    shuffleQuestions: { type: Boolean, default: false },

    questions: [questionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TestPapers", testPaperSchema);