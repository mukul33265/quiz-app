const express = require("express");
const razorpayRouter = express.Router() ;
const RazorpayInstance = require("../config/razorpay") ;
const TestSeries = require("../models/testSeries") ;
const auth = require("../middlewares/auth");

razorpayRouter.post("/create-order" , auth,async(req,res) => {
    try{
        const {seriesId} = req.body ;
        const series = await TestSeries.findById(seriesId);

        if (!series) {
            return res.status(404).json({
                success: false,
                message: "Series not found"
            });
        }

        const order = await RazorpayInstance.orders.create({
            amount: series.price * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        });
    
        res.status(200).json({
            success: true,
            order,
            series
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

module.exports = razorpayRouter ;