const mongoose = require("mongoose");

const testSeriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    description: { type: String, required: true },

    subject: { type: String },

    price: { type: Number, default: 0 },

    isPaid: { type: Boolean, default: false },

  },
  { timestamps: true }
);

module.exports = mongoose.model("TestSeries", testSeriesSchema);