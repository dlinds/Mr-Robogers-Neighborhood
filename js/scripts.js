// Utility Logic

function checkNumberPresence (fullNumber, numToFind) {
  const numArray = fullNumber.split("");  
  for (i = 0; i < numArray.length; i++) {   //check to see if numToFind is present
    if (parseInt(numArray[i]) === numToFind) {
      return true;
    } 
  } return false; //if for loop doesn't find number, return false
}

// Business Logic
function robotizeTheNumber (numInput) {

  if ((isNaN(numInput)) || (parseInt(numInput) < 0) || (numInput.length === 0)) {
    return false; //if not a valid number, or if num is less than 0
  }
  const robotStrings = ["0","Beep!","Boop","Won't you be my neighbor?"];
  let numCombo = [];
  for (x = 3; x > 0; x--) {
    if (checkNumberPresence(numInput, x)) {
      numCombo.push(robotStrings[(x)])
      return numCombo; //returns the corresponding string in robotStrings
    }
  }
  //if no 3, 2, or 1 is present, the below runs. It counts up from 0 to the number input, replacing 0, 1, 2, and 3 as it
  //counts with the corresponding string for each number from robotStrings[];
  for (i = 0; i <= parseInt(numInput); i++) {
    if (robotStrings[i]) {
      numCombo.push(robotStrings[i]);
    } else {
      numCombo.push(i);
    }
  }
  return numCombo;
}

//UI Logic

$(document).ready(function() {
	$("form#ask-the-robot").submit(function(event) {
    event.preventDefault();
    numArray = robotizeTheNumber($("#user-input").val());

    if (numArray === false) {
      $("#robot-paragraph").html("Please enter a <b>number</b>, that is also <b>greater than 0</b>.").show('slow');
    } else {
      numArray.forEach(function (numOut, index) {
        if (index < (numArray.length - 1)) {
          $("#robot-paragraph").append(numOut + ", ").show('slow');
        } else {
          $("#robot-paragraph").append(numOut).show('slow');
        }
      });
    }

    $("#robot-head-img").attr("src", "img/robot-talk.jpg");
    $("#toggle-mouth").text("Close my mouth");
    $("#user-input").val("");
  });

  $("input#user-input").click(function() {
    $("#robot-head-img").attr("src", "img/robot-not-talking.png");
    $("#toggle-mouth").text("Open my mouth");    
    $("#robot-paragraph").hide( 1000 , function () {
      $("#robot-paragraph").text("");
    });
  });

  $("div#toggle-mouth").click(function() {
    if ($("#toggle-mouth").text() === "Open my mouth") {
      $("#robot-head-img").attr("src", "img/robot-talk.jpg");
      $("#toggle-mouth").text("Close my mouth");
    } else if ($("#toggle-mouth").text() === "Close my mouth") {
      $("#robot-head-img").attr("src", "img/robot-not-talking.png");
      $("#toggle-mouth").text("Open my mouth");
    }
  });

});