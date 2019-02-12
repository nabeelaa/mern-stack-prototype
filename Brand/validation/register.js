const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.occupation = !isEmpty(data.occupation) ? data.occupation : "";
  data.organization = !isEmpty(data.organization) ? data.organization : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.address = !isEmpty(data.address) ? data.address : "";
  data.accomplish = !isEmpty(data.accomplish) ? data.accomplish : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // occupation
  if (!Validator.isLength(data.occupation, { min: 2, max: 30 })) {
    errors.occupation = "Occupation must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = "Occupation field is required";
  }

  // email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // organization
  if (Validator.isEmpty(data.organization)) {
    errors.organization = "Organization field is required";
  }
  // address
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }
  // accomplish
  if (Validator.isEmpty(data.accomplish)) {
    errors.accomplish = "This field is required";
  }
  // phone
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }
  if (!Validator.isMobilePhone(data.phone, "en-US")) {
    errors.phone = "Phone number should be valid";
  }
  // password2
  //   if (Validator.isEmpty(data.password2)) {
  //     errors.password2 = 'Confirm Password field is required';
  //   } else {
  //     if (!Validator.equals(data.password, data.password2)) {
  //       errors.password2 = 'Passwords must match';
  //     }
  //   }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
