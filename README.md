# _Mr. Robogers Neighborhood_

#### By _**Daniel Lindsey**_

#### _An application that will replace certain numbers with strings_  
  
<br>

# Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Markdown_

<br>

# Description

When a user inputs a number, the robot will message a set of values based on what digits are in the number. If the inputted number contains a 3, 2, or 1, corresponding strings will be returned for each (with 3 taking priority over 2, and 2 over 1). If the number is not 3, 2, or 1, the robot will output a string counting from 0 up to the inputted number, replacing 3, 2, and 1 with their corresponding strings. For example,  

**_INPUT_**: &nbsp; 8  
**_OUTPUT_**: &nbsp; 0, Beep!, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8

<br>

# Setup/Installation Requirements


There are two options for running the application
* ### GitHub Pages  
    To view a live version of this project, please navigate to the following site:  
    https://dlinds.github.io/Mr-Robogers-Neighborhood/

* ### Cloning the repository  
    Alternativly, you can clone/download the repository from Github. To do so,  
    
    1. Click the green Code button in the top right of the repository
    2. Choose Download ZIP
    3. Navigate to your Downloads folder, and extract the contents to your desktop
    4. Double click to open index.html
    5. You should now be viewing the page in your browser.

<br>
  
# Tests
  
  
## Describe: robotizeTheNumber()


Test: "It should return false if no number is input"  
Code:  
const userNum = "";  
robotizeTheNumber(userNum);  
Expected Output: false  
  
  
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
  
  
Test: "It should return array counting up to number from 0, replacing 3,2,1 with specific string for each"  
Code:  
const userNum = "77";  
robotizeTheNumber(userNum);  
Expected Output: ["0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]
 
  
  <br>

## Describe: checkNumberPresence()

Test: "It should return true if second input is present in first input"  
Code:  
const numToSearch = "95876985769584719";  
const numToFind = 4;  
checkNumberPresence(numToSearch,numToFind);  
Expected Output: true  
  
<br>

## Known Bugs

* _There are no known bugs at this time. If you happen to find one, or get a response that is unexpected, please message me on Github!_

<br>

## License

_MIT_

Copyright (c) _1/21/2022_ _Daniel Lindsey_