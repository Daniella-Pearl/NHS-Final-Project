const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  item_selection: {
    type: String,
    trim: true,
  },
  productPurchaseDate: {
    type: Date,
    default: Date.now(),
    unique: true,
  },
  productUnit: {
    type: String,
    unique: true,
  },
  supplierName: {
    type: String,
    trim: true,
  },
  productCostPrice: {
    type: Number,
    trim: true,
  },
  productQuantity: {
    type: Number,
    trim: true,
  },
  productSellPrice: {
    type: Number,
    trim: true,
  },
  productPayment: {
    type: String,
    trim: true,
  },
  productCategory: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Stockmgt", stockSchema);
