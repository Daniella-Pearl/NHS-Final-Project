//1. Dependencies
const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require('mongoose');

require('dotenv').config();
//always after dotenv config
const connectDb = require('./config/db');  //to import file in db.js

// 2. Instantiations
const app = express();
const port = 7000;

// 3. Configurations
connectDb(); //final stage to connect database

// set templating engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 4. Middleware
app.use(express.static(path.join(__dirname, "public")));
// To parse URL encoded data
app.use(express.urlencoded({ extended: false })); //very important else you won't get data
app.use(
  expressSession({
    secret: "My secret",
    resave: false,
    saveUninitialized: false,
  }),
);

// 5. Routes
app.use("/", require("./routes/registerRoutes"));



// Always second last block of code.Handling non-existent routes;
app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});

// 6. Bootstrapping server
// last line of code in this file.
app.listen(port, () => console.log(`listening on port ${port}`));
