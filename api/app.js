require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// MongoDB
const keys = require("./bin/keys");
var mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });
// var db = mongoose.connection;
mongoose.connect(keys.MONGODB_URI, () => {
    console.log("connected to mongo db");
  });

// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", _ => {
//   console.log("Connected to DB");
// });

module.exports = app;
