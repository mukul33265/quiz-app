const Purchase = require("../models/Purchase");
const TestPapers = require("../models/testPapers");

const checkPaperAccess = async (req, res, next) => {
  try {
    const paper = await TestPapers.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    const FREE_PAPER_ID = "6a2e1c3490e931ff98ca733b";

    if (paper._id.toString() === FREE_PAPER_ID) {
      req.paper = paper;
      return next();
    }

    const purchase = await Purchase.findOne({
      userId: req.user.userId,
      testSeriesId: paper.testSeriesId,
      paymentStatus: "success",
      isActive: true,
      validTill: { $gt: new Date() },
    });

    if (!purchase) {
      return res.status(403).json({
        message: "Please purchase this test series",
      });
    }

    req.paper = paper;
    req.purchase = purchase;

    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = checkPaperAccess;