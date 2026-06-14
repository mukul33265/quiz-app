const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    testSeriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestSeries",
      required: true,
    },

    amountPaid: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    razorpayOrderId: {
      type: String,
    },

    razorpayPaymentId: {
      type: String,
    },

    razorpaySignature: {
      type: String,
    },

    purchasedAt: {
      type: Date,
      default: Date.now,
    },

    validTill: {
      type: Date,
      default: () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 2);
        return date;
      }
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate purchase for same series
purchaseSchema.index({ userId: 1, testSeriesId: 1 }, { unique: true });

module.exports =
  mongoose.models.Purchase ||
  mongoose.model("Purchase", purchaseSchema);