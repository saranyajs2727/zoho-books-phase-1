const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer_type: {
    type: String,
    required: false,
  },
  primary_contact: {
    type: String,
    required: false,
  },
  first_name: {
    type: String,
    required: true,
  },
   last_name: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: false,
  },
  customer_name: {
    type: String,
    required: false,
  },
  customer_email: {
    type: String,
    required: false,
  },
  work_phone: {
    type: String,
    required: false,
  },
  mobile_phone: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
