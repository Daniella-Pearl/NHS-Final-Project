const express = require("express");
const router = express.Router();
const Stockmgt = require("../models/Stockmgt");

//stock management page form
router.get("/stock", (req, res) => {
  res.render("stockMgt");
});

router.post("/stock", async (req, res) => {
  try {
    const {
      item_selection,
      productPurchaseDate,
      productUnit,
      supplierName,
      productCostPrice,
      productQuantity,
      productSellPrice,
      productPayment,
      productCategory
    } = req.body;
    //create new product:
    const newProduct = new Stockmgt({
      item_selection,
      productUnit,
      supplierName,
      productCostPrice,
      productQuantity,
      productSellPrice,
      productPayment,
      productCategory
    });
    await newProduct.save();
    console.log(`New product of ${newProduct} saved successfully`);

    //redirect to stock dashboard
    res.redirect('/stock');

} catch (error){
    console.error("Database says error is", error);
    res.render('stockMgt', {error: "Failed to save product because " + error})
}
})

module.exports = router;