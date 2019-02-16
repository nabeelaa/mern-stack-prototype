const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// User
const users = require("./server/User/routes/api/users");
const profile = require("./server/User/routes/api/profile");
const posts = require("./server/User/routes/api/posts");

// Brand
const brands = require("./server/Brand/routes/api/brands");
// const profile = require("./User/routes/api/profile");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./server/config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!!"));

//Passport middlware
app.use(passport.initialize());

// Passport Config
require("./server/config/passport")(passport);

// User Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Brand Routes
app.use("/api/brands", brands);

// Server static assests if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/index.html"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
