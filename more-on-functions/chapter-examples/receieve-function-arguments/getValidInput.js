const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!

let startsWithA = function(userInput) {
  if (userInput.charAt(0) === "a") {
    return true;
  }

  return false;
}

console.log(getValidInput('Type a word that starts with "a". ', startsWithA));

let isVowel = function(userInput) {
  if (userInput === 'a' || userInput === 'e' || userInput === 'i' || userInput === 'o' || userInput === 'u') {
    return true;
  }

  return false;
}; 

console.log(getValidInput('Type a vowel. ', isVowel));