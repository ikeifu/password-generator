// // linking variable and id together
// const characterAmountSlider = document.getElementById('characterAmountSlider');
// const characterAmountNumber = document.getElementById('characterAmountNumber');
// // aligning characterAmountSlider and number value
// characterAmountSlider.addEventListener('input', syncCharacterAmount)
// characterAmountNumber.addEventListener('input', syncCharacterAmount)

// function syncCharacterAmount(x) {
//     const value = x.target.value
//     characterAmountSlider.value = value
//     characterAmountNumber.value = value
// }
// //
// //Range of generation
// const UPPERCASE_CHAR_CODES = randomNG(65, 90);
// // console.log("here " + UPPERCASE_CHAR_CODES);
// const LOWERCASE_CHAR_CODES = randomNG(97, 122);
// // console.log("try " + LOWERCASE_CHAR_CODES);
// const NUMBER_CHAR_CODES = randomNG(48, 57);

// const SYMBOL_CHAR_CODES = randomNG(33, 47).concat(randomNG(58,64))

// function randomNG(x, y){
//     const array = []
//     for (let i = x; i <= y; i++) {
//         array.push(i)
//     }
//     return array
// }
// //

// //Checking for checked values
// const includeUppercaseElement = document.getElementById("includeUppercase")
// // console.log(includeUppercase)
// const includeSymbolsElement = document.getElementById("includeSymbols")
// // console.log(includeSymbols)
// const includeNumbersElement = document.getElementById("includeNumbers")
// const passwordDisplay = document.getElementById('passwordDisplay')
// const form = document.getElementById('passwordGeneratorForm')
// // console.log(includeNumbers)
// //

// //Generating password in box

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     const characterAmount = characterAmountNumber.value;
//     const includeUppercase = includeUppercaseElement.checked;
//     console.log("first" + includeUppercase);
//     const includeNumbers = includeNumbersElement.checked;
//     console.log("second" + includeNumbers);
//     const includeSymbols = includeSymbolsElement.checked;
//     console.log("third" + includeSymbols);
//     // console.log("check symbols " + includeSymbols)
//     const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
//     // console.log(password)
//     passwordDisplay.innerText = password
// })

// function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
//     let charCodes = LOWERCASE_CHAR_CODES
//     // if checked, it adds on the possible values of the list below.
//     if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
//     // console.log("first " + charCodes)
//     if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
//     // console.log("second " + charCodes)
//     if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
//     // console.log("third " + charCodes)

//     const passwordCharacters = [];
//     for (let i= 0; i < characterAmount; i++) {
//         // giving random characters to the amount of character codes
//         const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
//         passwordCharacters.push(String.fromCharCode(characterCode));
//     }
//     return passwordCharacters.join('')
// }
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "%", "&", "*", ",", ".", "/", "-", "="];
var passwordText = document.querySelector(".passwordBox");
var generatePass = document.getElementById("generate");
generatePass.addEventListener("click", function (event) {
  event.preventDefault();
  var chosenChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var createdPassword = "";
  alert("Welcome to the lame password generator");
  var checkLength = prompt("Pick a length between 8-128");
  while (checkLength <= 7 || checkLength >= 129 || isNaN(checkLength)) {
    alert(
      "Error! Your password length should be a number between 8 and 128 characters Try again!"
    );

    checkLength = prompt(
      "How many characters would you like your password to contain? (8-128)"
    );
  }
  var uppercaseCheck = confirm("Would you like uppercase letters?");
  var numbersCheck = confirm("How about numbers?");
  var symbolsCheck = confirm("Any symbols?");
  if ((uppercaseCheck = true)) {
    console.log("check");
    chosenChar = chosenChar.concat(upperCase);
  }
  if ((numbersCheck = true)) {
    console.log("check2");
    chosenChar = chosenChar.concat(numbers);
  }
  if ((symbolsCheck = true)) {
    console.log("check3");
    chosenChar = chosenChar.concat(symbols);
  }
  for (var i = 0; i < checkLength; i++) {
    createdPassword =
      createdPassword +
      chosenChar[Math.floor(Math.random() * chosenChar.length)];
    console.log(createdPassword);
  }
  passwordText.value = createdPassword;
});
