// aligning characterAmountSlider and number value
const characterAmountSlider = document.getElementById('characterAmountSlider');
const characterAmountNumber = document.getElementById('characterAmountNumber');

characterAmountSlider.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(x) {
    const value = x.target.value
    characterAmountSlider.value = value
    characterAmountNumber.value = value
}
//
//Range of generation
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const UPPER_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64))
const passwordDisplay = document.getElementById('passwordDisplay')
const form = document.getElementById('passwordGeneratorForm')

function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++) {
        array.push[i]
    }
    return array
}
//

//Checking for checked values
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeSymbolsElement = document.getElementById("includeSymbols")
const includeNumbersElement = document.getElementById("includeNumbers")
//

//Generating password in box

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})


function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase){
    let charCodes = LOWERCASE_CHAR_CODES
    // if checked, it adds on the possible values of the list below.
    if (includeUppercase) charCodes = charCodes.concat(UPPER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    const passwordCharacters = []
    for (let i= 0; i < characterAmount; i++) {
        // giving random characters to the amount of character codes 
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}
