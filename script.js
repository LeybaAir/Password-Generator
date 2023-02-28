//Assignment code here
var generateBtn = document.querySelector("#generate");

//passwordOptions
const passwordOptions = {
  number: "1234567890",
  symbols: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

//functions
function generatePassword () {
  let passInfo = "";
  var characterlength = prompt ("how long does password have to be?")
  if (characterlength < 8 || characterlength > 128 || isNaN(characterlength) == true) {
    alert ("wrong password length")
    return generatePassword
  }

  var lower = confirm ("would you like to use lowercase letters?");
  if (lower == true) {
  passInfo = passInfo + passwordOptions.lower;
  }

  var upper = confirm ("would you like to use uppercase letters?");
  if (upper == true) {
  passInfo = passInfo + passwordOptions.upper;
  }

  var number = confirm ("would you like to use numbers?");
  if (number == true) {
  passInfo = passInfo + passwordOptions.number;
  }

  var symbols = confirm ("would you like to add symbols?");
  if (symbols == true) {
  passInfo = passInfo + passwordOptions.symbols;
  }

  console.log (passInfo)
  let randomPassword = "";
  for(let i = 0; i < characterlength; i++) {randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
  };
  return randomPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)