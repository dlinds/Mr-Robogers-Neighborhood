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
    return false; //if not a valid number
  }
  
  const robotStrings = ["Beep!","Boop","Won't you be my neighbor?"]
  
  for (x = 3; x > 0; x--) {
    if (checkNumberPresence(numInput, x)) {
      return robotStrings[(x-1)];
    }
  }
  let comboStr = "";
  for (i = 0; i <= parseInt(numInput); i++) {
    if (parseInt(numInput) === 0) {
      comboStr = "0";
      break;
    } else {
      if (i !== parseInt(numInput)) {
        if (i === 1 || i === 2 || i === 3) {
          comboStr += robotStrings[(i-1)] + ", ";
        } else {
          comboStr += i + ", ";
        }
      } else {
          comboStr += i;
        }
      }
  }
  return comboStr;
}