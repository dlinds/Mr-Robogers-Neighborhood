// Business Logic
function robotizeTheNumber (numInput) {
  if (isNaN(numInput)) {
    return false; //if not a valid number
  }

  if (parseInt(numInput) < 0) {
    return false; //if less than 0, return false
  }

  //first, check and see if there are any 3s
  const numArray = numInput.split("");
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === 3) {
      return "Won't you be my neighbor?";
    }
  }
}