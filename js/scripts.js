// Utility Logic

function checkNumberPresence (fullNumber, numToFind) {
  let strNum = fullNumber + "";
  const numArray = strNum.split("");  
  for (let i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === numToFind) {
      return true;
    } 
  } return false;
}

// Business Logic

function robotizeTheNumber (numInput) {

  if ((isNaN(numInput)) || (parseInt(numInput) < 0) || (numInput.length === 0)) {
    return false;
  }
  const robotStrings = ["0","Beep!","Boop","Won't you be my neighbor?"];
  let returnArray = [];
  for (let x = 0; x <= parseInt(numInput); x++) {
    if (checkNumberPresence(x,3)) {
      returnArray.push(robotStrings[3]);
    } else if (checkNumberPresence(x,2)) {
      returnArray.push(robotStrings[2]);
    } else if (checkNumberPresence(x,1)) {
      returnArray.push(robotStrings[1]);
    } else {
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
    numArray = robotizeTheNumber($("#user-input").val());

    if (numArray === false) {
      $("#robot-paragraph").html("We are still training Robo the Robot! In order to make sure his AI is trained correctly, please enter a valid <b>number</b>, and please make sure that is also <b>greater than 0</b>.").show('slow');
    } else {
      numArray.forEach(function (numOut, index) {
        if (index < (numArray.length - 1)) {
          $("#robot-paragraph").append(numOut + "<br>").slideDown('slow');
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