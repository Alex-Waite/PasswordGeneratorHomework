// Assignment Code
var generateBtn = document.querySelector("#generate");









// Character Generator

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

}

console.log(getRandomLowercase())
console.log(getRandomUppercase())
console.log(getRandomNumber())









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);