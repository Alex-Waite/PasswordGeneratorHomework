"use strict";

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

const randomPass = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  number: getRandomNumber,
  specialCharacter: getRandomSpecialCharacter
};








// Write password to the #password input
function writePassword() {
  var password = (generatePasswordlength, containsLowercase, containsUppercase, containsNumbers, containsSpecialCharacter) {

  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}










// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthBox.value)
  const containsLowercase = lowercaseBox.checked;
  const containsUppercase = uppercaseBox.checked;
  const containsNumbers = numberBox.checked
  const containsSpecialCharacter = specialCharacterBox.checked;
  passwordText = generatePassword(length, containsLowercase, containsUppercase, containsNumbers, containsSpecialCharacter)
})