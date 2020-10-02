// linking variable and id together
const characterAmountSlider = document.getElementById('characterAmountSlider');
const characterAmountNumber = document.getElementById('characterAmountNumber');
// aligning characterAmountSlider and number value
characterAmountSlider.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(x) {
    const value = x.target.value
    characterAmountSlider.value = value
    characterAmountNumber.value = value
}
//
//Range of generation
const UPPERCASE_CHAR_CODES = randomNG(65, 90);
// console.log("here " + UPPERCASE_CHAR_CODES);
const LOWERCASE_CHAR_CODES = randomNG(97, 122);
// console.log("try " + LOWERCASE_CHAR_CODES);
const NUMBER_CHAR_CODES = randomNG(48, 57);

const SYMBOL_CHAR_CODES = randomNG(33, 47).concat(randomNG(58,64))

function randomNG(x, y){
    const array = []
    for (let i = x; i <= y; i++) {
        array.push(i)
    }
    return array
}
//

//Checking for checked values
const includeUppercaseElement = document.getElementById("includeUppercase")
// console.log(includeUppercase)
const includeSymbolsElement = document.getElementById("includeSymbols")
// console.log(includeSymbols)
const includeNumbersElement = document.getElementById("includeNumbers")
const passwordDisplay = document.getElementById('passwordDisplay')
const form = document.getElementById('passwordGeneratorForm')
// console.log(includeNumbers)
//

//Generating password in box

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    // console.log("check symbols " + includeSymbols)
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    // console.log(password)
    passwordDisplay.innerText = password
})


function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase){
    let charCodes = LOWERCASE_CHAR_CODES
    // if checked, it adds on the possible values of the list below.
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    // console.log("first " + charCodes)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    // console.log("second " + charCodes)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    // console.log("third " + charCodes)

    const passwordCharacters = [];
    for (let i= 0; i < characterAmount; i++) {
        // giving random characters to the amount of character codes 
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('')
}