/* global moment */

// When user clicks add-btn
$("#createUser").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newUser = {
    full_name: $("#full_name").val(),
    username: $("#username").val(),
    email: $("#email").val(),
    password: $("#password").val()
    
  }; return newUser; 
  console.log(newUser);

  // Send an AJAX POST-request with jQuery
  // $.post("/api/user", newUser)
  //   // On success, run the following code
  //   .then(function() {
         
  //     // var row = $("<div>");
  //     // row.addClass("chirp");

  //     // row.append("<p>" + newChirp.author + " chirped: </p>");
  //     // row.append("<p>" + newChirp.body + "</p>");
  //     // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

  //     // $("#chirp-area").prepend(row);

  //   });

  // Empty each input box by replacing the value with an empty string
  $("#full_name").val("");
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
});

// When the page loads, grab all of our chirps
// $.get("/api/all", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       row.addClass("chirp");

//       row.append("<p>" + data[i].author + " chirped.. </p>");
//       row.append("<p>" + data[i].body + "</p>");
//       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       $("#chirp-area").prepend(row);

//     }

//   }

// });
