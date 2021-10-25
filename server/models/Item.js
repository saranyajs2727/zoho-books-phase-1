// External dependancies
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  selling_price: {
    type: String,
    required: true,
  },
  quantity:{
    type: String,
    required: false,
  },
  amount:{
    type: String,
    required: false,
  },
  selling_account: {
    type: String,
    required: false,
  },
  selling_description: {
    type: String,
  },
  purchase_price: {
    type: String,
    required: true,
  },
  purchase_account: {
    type: String,
    required: false,
  },
  purchase_description: {
    type: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
