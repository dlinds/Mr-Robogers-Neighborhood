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



function checkNumberPresence2 (fullNumber, numToFind) {
  let strNum = fullNumber + "";
  const numArray = strNum.split("");  
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === numToFind) {
      return true;
    } 
  } return false;
}


// Business Logic
function robotizeTheNumber2 (numInput) {

  if ((isNaN(numInput)) || (parseInt(numInput) < 0) || (numInput.length === 0)) {
    return false;
  }
  const robotStrings = ["0","Beep!","Boop","Won't you be my neighbor?"];
  let returnArray = [];
  for (x = 0; x < parseInt(numInput); x++) {
    if (checkNumberPresence2(x,3)) {
      returnArray.push(robotStrings[3]);
    } else if (checkNumberPresence2(x,2)) {
      returnArray.push(robotStrings[2]);
    } else if (checkNumberPresence2(x,1)) {
      returnArray.push(robotStrings[1]);
    } else {
      returnArray.push(x);
    }
  }

  return returnArray;
}

function robotizeTheNumber3 (numInput) {
  if ((isNaN(numInput)) || (parseInt(numInput) < 0) || (numInput.length === 0)) {
    return false; //if not a valid number, or if num is less than 0
  }
  const robotStrings = ["0","Beep!","Boop","Won't you be my neighbor?"];
  let returnArray = [];  
  for (x = 0; x <= parseInt(numInput); x++) {
    let isFound = false;
    for (y = 3; y >= 1; y--) {
      if (checkNumberPresence2(x,y)) {
        returnArray.push(robotStrings[y]);
        isFound = true;
        break;
      }      
    }
    if (isFound === false) {
      returnArray.push(x);
    }
  }
  return returnArray;
}


//UI Logic

$(document).ready(function() {
	$("form#ask-the-robot").submit(function(event) {
    event.preventDefault();
    $("#robot-paragraph").text('');
    numArray = robotizeTheNumber2($("#user-input").val());

    if (numArray === false) {
      $("#robot-paragraph").html("We are still training Robo the Robot! In order to make sure his AI is trained correctly, please enter a valid <b>number</b>, and please make sure that is also <b>greater than 0</b>.").show('slow');
    } else {
      numArray.forEach(function (numOut, index) {
        if (index < (numArray.length - 1)) {
          $("#robot-paragraph").append(numOut + "<br>").show('slow');
        } else {
          $("#robot-paragraph").append(numOut).show('slow');
        }
      });
    }

    $("#robot-head-img").attr("src", "img/robot-talk.png");
    $("#toggle-mouth").text("Close my mouth");
    $("#toggle-mouth").slideDown("slow");
    $("#reset-tip").slideDown("slow");
    $("#user-input").val("");
  });

  $("input#user-input").click(function() {
    $("#robot-head-img").attr("src", "img/robot-not-talking.png");
    $("#toggle-mouth").text("Open my mouth");
    $("#reset-tip").slideUp("slow");
    $("#robot-paragraph").hide( 200 , function () {
      $("#robot-paragraph").text("");
    });
  });

  $("#toggle-mouth").click(function() {
    if ($("#toggle-mouth").text() === "Open my mouth") {
      $("#robot-head-img").attr("src", "img/robot-talk.png");
      $("#toggle-mouth").text("Close my mouth");
      $("#reset-tip").slideDown("fast");
    } else if ($("#toggle-mouth").text() === "Close my mouth") {
      $("#reset-tip").slideUp("fast");
      $("#robot-head-img").attr("src", "img/robot-not-talking.png");
      $("#toggle-mouth").text("Open my mouth");
    }
  });

});