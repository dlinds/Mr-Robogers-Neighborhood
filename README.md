# _Mr. Robogers Neighborhood_

#### By _**Daniel Lindsey**_

#### _An application that will replace certain numbers with strings_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Markdown_
* _jQuery_

## Description

_When a user inputs a number, the program will return a list of values starting at 0, but replacing 1, 2, and 3 (if the number input is higher than either of these) with separate strings corresponding for each number. If the number is 4 or higher, 4 and any proceeding numbers will be lest as integers._

## Setup/Installation Requirements
---

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

---
## Tests

#### Describe: robotizeTheNumber()

Test: "It should return false if a non-number is input"  
Code:  
const userNum = "283a47329874234";  
robotizeTheNumber(userNum);  
Expected Output: false  
  
  
Test: "It should return false if a number is less than 0"  
Code:  
const userNum = "-2";  
robotizeTheNumber(userNum);  
Expected Output: false  
  
  
Test: "It should return string "Won't you be my neighbor?" if number input contains a 3"  
Code:  
const userNum = "958726983576951879";  
robotizeTheNumber(userNum);  
Expected Output: "Won't you be my neighbor?"  
  
  
Test: "It should return string "Boop" if number input contains a 2 and no 3 is present"  
Code:  
const userNum = "9587698576295879";  
robotizeTheNumber(userNum);  
Expected Output: "Boop"  
  
  
Test: "It should return string "Beep!" if number input contains a 1 and no 3 or 2 is present"  
Code:  
const userNum = "9587698576958719";  
robotizeTheNumber(userNum);  
Expected Output: "Beep!"  
  
  
Test: "It should return string "0" if number input is 0 and no 3, 2, 1 is present"  
Code:  
const userNum = "0";  
robotizeTheNumber(userNum);  
Expected Output: "0"  
  
  
Test: "It should return string counting up to number from 0, replacing 3,2,1 with specific string for each"  
Code:  
const userNum = "77";  
robotizeTheNumber(userNum);  
Expected Output: "0, Beep!, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77"

  
  
#### Describe: checkNumberPresence()

Test: "It should return true if second input is present in first input"  
Code:  
const numToSearch = "95876985769584719";
const numToFind = 4;
checkNumberPresence(numToSearch,numToFind);  
Expected Output: true  
  
  
## Known Bugs

* _Nothing known yet_

## License

_MIT_

Copyright (c) _1/21/2022_ _Daniel Lindsey_