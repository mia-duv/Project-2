// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var userInfo = sequelize.define("userInfo", {
  full_name: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  lucky_numbers: Sequelize.INTEGER
});

// Syncs with DB
userInfo.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = userInfo;
