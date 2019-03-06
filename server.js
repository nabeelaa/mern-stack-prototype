const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const morgan = require("morgan");

// User
const users = require("./server/user/routes/api/users");
const mediaPersona = require("./server/user/routes/api/mediaPersona");
const profile = require("./server/user/routes/api/profile");

// Brand
const brands = require("./server/brand/routes/api/brands");
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
app.use("/api/mediaPersona", mediaPersona);
app.use("/api/profile", profile);

app.use(morgan("dev"));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Brand Routes
app.use("/api/brands", brands);

// Server static assests if in production

if (process.env.NODE_ENV === "production") {
  // Set static folderr

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
