const express = require('express');
const Purchase = require("../models/purchase");
const auth = require("../middlewares/auth")
const purchaseDetailsRouter = express.Router() ;

purchaseDetailsRouter.get("/purchase-details" ,auth, async(req,res) => {
    try{
        const userId = req.user.userId;
        const purchases = await Purchase.find(
            { userId },
            { testSeriesId: 1, _id: 0 }
        );
        const testSeriesIds = purchases.map(
            (purchase) => purchase.testSeriesId
        );
        res.status(200).json(testSeriesIds);
    }
    catch(err){
        console.log(err) ;
    }
})
module.exports = purchaseDetailsRouter ;