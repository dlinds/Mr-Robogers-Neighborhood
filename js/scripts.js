// Business Logic
function robotizeTheNumber (numInput) {
  if (isNaN(numInput)) {
    return false; //if not a valid number
  }

  if (parseInt(numInput) < 0) {
    return false; //if less than 0, return false
  }

  const numArray = numInput.split(""); //split into an array of strings
  
  //first, check and see if there are any 3s
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === 3) {
      return "Won't you be my neighbor?";
    }
  }

  //next, check and see if there are any 2s
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === 2) {
      return "Boop!";
    }
  }

  //next, check and see if there are any 1s
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === 1) {
      return "Boop!";
    }
  }
}