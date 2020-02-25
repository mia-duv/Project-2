// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/user.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  // app.get("/api/all", function(req, res) {

  //   // Finding all Chirps, and then returning them to the user as JSON.
  //   // Sequelize queries are asynchronous, which helps with perceived speed.
  //   // If we want something to be guaranteed to happen after the query, we'll use
  //   // the .then function
  //   User.findAll({}).then(function(results) {
  //     // results are available to us inside the .then
  //     res.json(results);
  //   });

  // });

  // Add a chirp
  app.post("/", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    User.create({
      full_name: req.body.full_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      lucky_numbers: req.body.lucky_numbers
    }).then(function(results) {
      console.log(results);
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};