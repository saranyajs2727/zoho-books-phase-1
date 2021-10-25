const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  salutation: {
    type: String,
    required: true,
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
  vendor_display_name: {
    type: String,
    required: false,
  },
  vendor_email: {
    type: String,
    required: false,
  },
  vendor_phone: {
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

module.exports = mongoose.model("Vendor", vendorSchema);
