// Assignment Code

// DOM Pointers, Locating ID's on the HTML
var generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password")
const uppercaseBox = document.getElementById('uppercaseCheck');
const lowercaseBox = document.getElementById('lowercaseCheck');
const numberBox = document.getElementById('numberCheck');
const specialCharacterBox = document.getElementById('specialCharacterCheck');
const lengthBox = document.getElementById('lengthCheck');

// Character Generator, Characters loacted from https://www.w3schools.com/html/html_charset.asp, assigns Math.random numbers to specific characters
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSpecialCharacter() {
  const specialCharacter = '!@#$%^&*()_-+=<>?,.:"{}[]\~';
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
}

// Password Object, Making the password an object allows the conditions of the password to be restricted

const randomFunc = {
  containsLowercase: getRandomLowercase,
  containsUppercase: getRandomUppercase,
  containsNumber: getRandomNumber,
  containsSpecialCharacter: getRandomSpecialCharacter
};

// This function uses caclulates the amount of conditions ticked (for the loop below) and contains an array of all the conditions,
// The filter function at the end removes types from the array if they are unchecked  

function generatePassword(length, containsLowercase, containsUppercase, containsNumber, containsSpecialCharacter) {
  let generatedPassword = '';
  const typesCount = containsLowercase + containsUppercase + containsNumber + containsSpecialCharacter;
  const typesArr = [{
    containsLowercase
  }, {
    containsUppercase
  }, {
    containsNumber
  }, {
    containsSpecialCharacter
  }].filter(item => Object.values(item)[0]);

  // If no conditions are checked then nothing will happen
  if (typesCount === 0) {
    return ""
  }

  // create a loop - this loops through increasing i by the amount of conditions selected,
  //it will generate 1 of each character type selected using the randomFunc object and loop though untill the users chosen length is greter than i
  for (let i = 0; i < length; i = i + typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });

  }
  // The loop above increments by the amount of conditions selected (so if all boxes are ticked the password will only generate in increments of 4)
  // This cuts the length of the generated password to the users chosen length
  const finalPassword = generatedPassword.slice(0, length);
  passwordText.textContent = finalPassword;
}

// Add event listener to generate button - WHEN the button is clicked THEN generate password will run
// The const's are reading if the conditions are ticked, if they are they are passed through to the generatePassword() function
generateBtn.addEventListener("click", () => {
  const length = +lengthBox.value;
  const containsLowercase = lowercaseBox.checked;
  const containsUppercase = uppercaseBox.checked;
  const containsNumbers = numberBox.checked
  const containsSpecialCharacter = specialCharacterBox.checked;
  generatePassword(length, containsLowercase, containsUppercase, containsNumbers, containsSpecialCharacter)
})