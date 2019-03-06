const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
// MediaPersona model
const MediaPersona = require("../../model/MediaPersona");
// @route  GET api/mediaPersona/test
// @desc   Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Media Persona Works" }));

// @route  POST api/mediaPersona
// @desc   Add Buyers Persona - Media
// @access Public
router.post(
  "/",
  //   passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newMediaPersona = new MediaPersona({
      watch_content: req.body.watch_content,
      click_targeted_ad: req.body.click_targeted_ad,
      outdoor_ad: req.body.outdoor_ad,
      fav_socialmedia: req.body.fav_socialmedia,
      fav_ott: req.body.fav_ott,
      tv_sm: req.body.tv_sm,
      tuneout: req.body.tuneout
    });
    newMediaPersona.save().then(mediaPersona => res.json(mediaPersona));
  }
);

module.exports = router;
