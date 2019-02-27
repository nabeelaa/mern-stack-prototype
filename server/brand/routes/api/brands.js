const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load user model
const Brand = require("../../model/Brand");

// @route  GET api/users/test
// @desc   Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Brand Works" }));

// @route  GET api/brands/register
// @desc   Register brand
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Brand.findOne({ email: req.body.email }).then(brand => {
    if (brand) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newBrand = new Brand({
        name: req.body.name,
        occupation: req.body.occupation,
        email: req.body.email,
        password: req.body.password,
        organization: req.body.organization,
        address: req.body.address,
        phone: req.body.phone,
        accomplish: req.body.accomplish
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newBrand.password, salt, (err, hash) => {
          //   if (err) {throw err};
          newBrand.password = hash;
          newBrand
            .save()
            .then(brand => res.json(brand))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  GET api/brands/login
// @desc   Login User / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  Brand.findOne({ email }).then(brand => {
    // Check for user
    if (!brand) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    // check password
    bcrypt.compare(password, brand.password).then(isMatch => {
      if (isMatch) {
        //  Matched | res.json({ msg: "Sucess" });
        const payload = {
          id: brand.id,
          name: brand.name,
          occupation: brand.occupation,
          organization: brand.organization
        }; // Create JWT Pyload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(404).json(errors);
      }
    });
  });
});

// @route  GET api/users/current
// @desc   Returning current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.brand.id,
      name: req.brand.name,
      organization: req.brand.organization,
      email: req.brand.email
    });
  }
);
module.exports = router;
