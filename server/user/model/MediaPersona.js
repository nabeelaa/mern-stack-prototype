const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MediaPersonaSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  watch_content: {
    type: String,
    required: true
  },
  click_targeted_ad: {
    type: String,
    required: true
  },
  outdoor_ad: {
    type: String,
    required: true
  },
  fav_socialmedia: {
    type: String,
    required: true
  },
  fav_ott: {
    type: Date,
    required: true
  },
  tv_sm: {
    type: String,
    required: true
  },
  tuneout: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Media = mongoose.model("mediaPersona", MediaPersonaSchema);
