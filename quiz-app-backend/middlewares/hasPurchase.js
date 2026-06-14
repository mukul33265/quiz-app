const Purchase = require("../models/purchase");

const hasAnyPurchase = async (req, res, next) => {
  try {
    const purchases = await Purchase.find({
      userId: req.user.userId,
      paymentStatus: "success",
      isActive: true,
      validTill: { $gt: new Date() }
    });

    if (purchases.length === 0) {
      return res.status(403).json({
        success: false,
        message: "No purchased test series found"
      });
    }

    req.purchases = purchases;

    next();

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

module.exports = hasAnyPurchase;