const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.location = !isEmpty(data.location) ? data.location : "";

  // location
  if (Validator.isEmpty(data.location)) {
    errors.location = "Please enter your lcoation";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
