const express = require("express");
const router = express.Router();

// @route  GET api/mediaPersona/test
// @desc   Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Media Persona Works" }));

module.exports = router;
