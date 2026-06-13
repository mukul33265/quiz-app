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

    accessType: {
      type: String,
      enum: ["series", "paper"],
      default: "series",
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

    paymentId: {
      type: String,
    },

    purchasedAt: {
      type: Date,
      default: Date.now,
    },

    validFrom: {
      type: Date,
      default: Date.now,
    },

    validTill: {
      type: Date,
      required: true,
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

module.exports = mongoose.model("Purchase", purchaseSchema);