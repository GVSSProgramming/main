const prompt = require('readline-sync'); //import prompt library
const input = prompt.question("Enter the string: "); //get user input
const stringArray = input.split(""); //split string by each character and store it in an array
/*
//no recursion
let isPalindrome = true; //default true
for(let i = 0; i < Math.floor(stringArray.length/2); i++){ //round down so center letter in odd words are ignored
    if(stringArray[i] !== stringArray[stringArray.length - i - 1]){ //if last letter != first letter
        isPalindrome = false; //set boolean to false
        break; //leave for loop
    }
}
*/
//recursion
let isPalindrome = true;
function checkPalindrome(stringArray,i){
    if(stringArray[i] !== stringArray[stringArray.length - i - 1]){ //if last letter != first letter
        isPalindrome = false;
    } else if (i < Math.floor(stringArray.length/2)) {
        checkPalindrome(stringArray,i+1);
    } 
}
checkPalindrome(stringArray,0);
console.log(isPalindrome); //return output