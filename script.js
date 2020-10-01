// Assignment Code
var generateBtn = document.querySelector("#generate");
//Generate random password
function generate(){
  //set password by slider
  let length = document.getElementById("slider").value;
  let values = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghiojklmnopqrstuvwxyz!@#$%^&*()_+";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //loop
  for(var i = 0; i <= length; i++){
    password = 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
