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

  if ((isNaN(numInput)) || (parseInt(numInput) < 0)) {
    return false; //if not a valid number, or if num is less than 0
  }
  const robotStrings = ["0","Beep!","Boop","Won't you be my neighbor?"];
  
  for (x = 3; x > 0; x--) {
    if (checkNumberPresence(numInput, x)) {
      return robotStrings[(x)]; //returns the corresponding string in robotStrings
    }
  }

  //if no 3, 2, or 1 is present, the below runs. It counts up from 0 to the number input, replacing 0, 1, 2, and 3 as it
  //counts with the corresponding string for each number from robotStrings[];
  let numCombo = [];
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
    $("#robot-paragraph").text($("#user-input").val()+ ": " + robotizeTheNumber($("#user-input").val()));
    $("#robot-head-img").attr("src", "../img/robot-talk.jpg");
    $("#user-input").val("");
  });

  $("#toggle-mouth").click(function() {
    if ($("#robot-head-img").attr("src") === "img/robot-not-talking.png") {
      $("#robot-head-img").attr("src", "img/robot-talk.jpg");
      $("#toggle-mouth").text("Close my Mouth");
    } else if ($("#robot-head-img").attr("src") === "img/robot-talk.jpg") {
      $("#robot-head-img").attr("src", "img/robot-not-talking.png");
      $("#toggle-mouth").text("Open my Mouth");
    }
  });

});


//$("#language-suggestion-img").attr("src", "src here");