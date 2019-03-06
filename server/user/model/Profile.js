const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  avatar: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  paymentDetails: {
    fullName: {
      type: String
    },
    creditcardno: {
      type: String
    },
    expiryDate: {
      type: String
    },
    zip: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
