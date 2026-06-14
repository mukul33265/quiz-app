const crypto = require("crypto");
const Purchase = require("../models/purchase");
const TestSeries = require("../models/testSeries");
const auth = require("../middlewares/auth");
const express = require("express");

const verifyPaymentRoute = express.Router() ;

verifyPaymentRoute.post("/verify-payment",auth, async(req,res) => {

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      seriesId,
    } = req.body;

    const userId = req.user.userId;

    // Basic validation
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !seriesId
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
    }

    // Verify Signature
    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");
    const isValid =
      generatedSignature === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    // Prevent duplicate processing
    const existingPayment =
      await Purchase.findOne({
        razorpayPaymentId: razorpay_payment_id,
      });

    if (existingPayment) {
      return res.status(200).json({
        success: true,
        message: "Payment already verified",
      });
    }

    // Check if user already owns series
    const alreadyPurchased =
      await Purchase.findOne({
        userId,
        testSeriesId: seriesId,
      });

    if (alreadyPurchased) {
      return res.status(400).json({
        success: false,
        message: "Test series already purchased",
      });
    }

    // Get test series price
    const series = await TestSeries.findById(seriesId);

    if (!series) {
      return res.status(404).json({
        success: false,
        message: "Test series not found",
      });
    }

    // Save purchase

    let purchase;

    try {
    purchase = await Purchase.create({
        userId,
        testSeriesId: seriesId,
        amountPaid: series.price,
        paymentStatus: "success",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
    });

    } catch (err) {

    return res.status(500).json({
        success: false,
        message: "Failed to save purchase",
    });
    }

    return res.status(200).json({
    success: true,
    message: "Payment verified successfully",
    purchase,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
})

module.exports = verifyPaymentRoute ;
 
