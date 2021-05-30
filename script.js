// Assignment code here

// arrays with all characters
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var randomCharacter = ["~<>';:}{][+=_-)(*&^%$#@!"];

var confirmCharacter = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmRandomCharacter;

function generatePassword() {
  var confirmCharacter = window.prompt("How long would you like your password? Must be between 8-128 characters");
    for ( var i = 128; i < confirmCharacter;){
      window.alert("password must be between 8-128 characters!");
      return;
    }
    for ( var i = 8; i > confirmCharacter;) {
      window.alert("password must be between 8-128 characters!");
      return;
    }
  var passwordCharacter = "";
  
  var confirmUpperCase = window.confirm("would you like uppercase letters?");
  if (confirmUpperCase) {
    passwordCharacter = passwordCharacter.concat(upperCase)
  }

  var confirmLowerCase = window.confirm("would you like lowercase letters?");
  if (confirmLowerCase) {
    passwordCharacter = passwordCharacter.concat(lowerCase)
  }

  var confirmNumbers = window.confirm("would you like numbers?");
  if (confirmNumbers) {
    passwordCharacter = passwordCharacter.concat(numbers)
  }

  var confirmRandomCharacter = window.confirm("would you like random characters?");
  if (confirmRandomCharacter) {
    passwordCharacter = passwordCharacter.concat(randomCharacter)
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
