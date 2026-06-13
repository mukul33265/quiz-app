const express = require("express");
const testRouter = express.Router() ;
const TestSeries = require("../models/testSeries");

testRouter.get("/", async (req, res) => {
  try {
    const series = await TestSeries.find();
    res.json(series);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = testRouter;