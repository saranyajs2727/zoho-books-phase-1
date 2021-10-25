// External dependancies
const mongoose = require("mongoose");

const estimateSchema = new mongoose.Schema({
  //use _id as estimate number
  customer: {
    // type: mongoose.Schema.Types.ObjectId,
    // required: true,
    // ref: "Customer",
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: false,
  },
  estimate_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: false,
  },
  sales_person: {
    type: String,
    required: false,
  },
  project_name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: false,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: false,
      },
      amount: {
        type: String,
        required: false,
      },
      selling_price: {
        type: String,
        required: false,
      },
    },
  ],
  customer_notes: {
    type: String,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
  tcs: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  terms: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Estimate", estimateSchema);
