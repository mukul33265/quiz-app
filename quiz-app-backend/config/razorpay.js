const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config() ;

const RazorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = RazorpayInstance;