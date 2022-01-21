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

  if (isNaN(numInput)) {
    return false; //if not a valid number
  }

  if (parseInt(numInput) < 0) {
    return false; //if less than 0, return false
  }
  
  const robotStrings = ["Beep!","Boop!","Won't you be my neighbor?"]
  
  for (x = 3; x > 0; x--) {
    if (checkNumberPresence(numInput, x)) {
      return robotStrings[(x-1)];
    }
  }
}