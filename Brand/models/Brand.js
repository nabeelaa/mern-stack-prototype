const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  accomplish: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("brands", BrandSchema);
