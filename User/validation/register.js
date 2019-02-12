const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.birthDate = !isEmpty(data.birthDate) ? data.birthDate : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // first name
  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First  name field is required";
  }

  // last name
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last  name field is required";
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

  // gender
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }
  // birthDate
  if (Validator.isEmpty(data.birthDate)) {
    errors.birthDate = "Birthday field is required";
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
