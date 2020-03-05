// Assignment Code

// DOM Pointers
var generateBtn = document.querySelector("#generate");

const uppercaseBox = document.getElementById('uppercaseCheck');
const lowercaseBox = document.getElementById('lowercaseCheck');
const numberBox = document.getElementById('numberCheck');
const specialCharacterBox = document.getElementById('specialCharacterCheck');
const lengthBox = document.getElementById('lengthCheck');








// Character Generator, Characters loacted from https://www.w3schools.com/html/html_charset.asp

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

console.log(getRandomLowercase())
console.log(getRandomUppercase())
console.log(getRandomNumber())
console.log(getRandomSpecialCharacter())

// Password Object

const randomFunc = {
  containsLowercase: getRandomLowercase,
  containsUppercase: getRandomUppercase,
  containsNumber: getRandomNumber,
  containsSpecialCharacter: getRandomSpecialCharacter
};








// Write password to the #password input

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

  // Doesn't have a selected type
  if (typesCount === 0) {
    return '';
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });

  }

  console.log(generatedPassword)
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}











// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +lengthBox.value;
  const containsLowercase = lowercaseBox.checked;
  const containsUppercase = uppercaseBox.checked;
  const containsNumbers = numberBox.checked
  const containsSpecialCharacter = specialCharacterBox.checked;
  generatePassword(length, containsLowercase, containsUppercase, containsNumbers, containsSpecialCharacter)
})