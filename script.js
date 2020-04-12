
// Assignment Code [given]
var generateBtn = document.querySelector("#generate");
// Write password to the #password input [given]
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}



// CODE BEGINS // <('.'<) <('_')> (>'.')>


// Declare Variables //
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;



// Declare Values //
// Special Characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numbers 0-9
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Letters a-z
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// (Space is for Uppercase Conversion)
space = [];
// null
var choices;
// Converts Letters to Uppercase 
var toUpper = function (x) {
    return x.toUpperCase();};
// Uppercase Conversion Variable
alpha2 = alpha.map(toUpper);
var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;});



// Password Generation Function //
function generatePassword() {
    // - First Question Prompt, "How many characters would you like your password to contain?"
    enter = parseInt(prompt("How many characters would you like your password to contain?"));
    // null, "Please Enter a Number Between 8 and 128."
    if (!enter) {
        alert("Please Enter a Number Between 8 and 128.");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Please Enter a Number Between 8 and 128."));
    } else {
    // Variables for Numbers, Special Characters, Uppercase, and Lowercase - Confirm
        confirmNumber = confirm("Click OK to confirm including Numeric characters.");
        confirmCharacter = confirm("Click OK to confirm including Special characters.");
        confirmUppercase = confirm("Click OK to confirm including Uppercase characters.");
        confirmLowercase = confirm("Click OK to confirm including Lowecase characters.");};



// if else if's - Input Scenarios //
    // null (4 Cancel Clicks) "Please Choose an Option."
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {choices = alert("Please Choose an Option.");}
    // all (4 Confirms)
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {choices = character.concat(number, alpha, alpha2);}
    // 3/4 (3 Confirms)
    else if (confirmCharacter && confirmNumber && confirmUppercase) {choices = character.concat(number, alpha2);}
    else if (confirmCharacter && confirmNumber && confirmLowercase) {choices = character.concat(number, alpha);}
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {choices = character.concat(alpha, alpha2);}
    else if (confirmNumber && confirmLowercase && confirmUppercase) {choices = number.concat(alpha, alpha2);}
    // 2/4 (2 Confirms)
    else if (confirmCharacter && confirmNumber) {choices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {choices = character.concat(alpha);
    } else if (confirmCharacter && confirmUppercase) {choices = character.concat(alpha2);
    } else if (confirmLowercase && confirmNumber) {choices = alpha.concat(number);
    } else if (confirmLowercase && confirmUppercase) {choices = alpha.concat(alpha2);
    } else if (confirmNumber && confirmUppercase) {choices = number.concat(alpha2);}
    // 1/4 (1 Confirm)
    else if (confirmCharacter) {choices = character;}
    else if (confirmNumber) {choices = number;}
    else if (confirmLowercase) {choices = alpha;}
    // (Uppercase Conversion)
    else if (confirmUppercase) {choices = space.concat(alpha2);};


// Randomizer //
    // Array Placeholder for Length
    var password = [];
    // Randomizer from Confirms
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);}
    // Password Array/String Conversion
    var ps = password.join("");
    UserInput(ps);
    return ps;}



// Posts Generated Password over Placeholder
function UserInput(ps) {
    document.getElementById("password").textContent = ps;}
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();});



// CODE ENDS // <('.'<) <('_')> (>'.')>



// Add event listener to generate button [given]
generateBtn.addEventListener("click", writePassword);
