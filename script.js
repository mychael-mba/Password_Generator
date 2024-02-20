// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let mergedArray = [...specialCharacters, ...numericCharacters, ...lowerCasedCharacters, ...upperCasedCharacters];


function getPasswordOptions() {
  let options = {};
  options.specialCharOpt = confirm(`Would you like to include special characters?`);
  options.numericCharOpt = confirm(`Would you like to include numeric characters?`);
  options.lowercaseCharOpt = confirm(`Would you like to include lowercase characters?`);
  options.upperCaseCharOpt = confirm(`Would you like to include uppercase characters?`);

  return options;
}

function getRandom(mergedArray) {
  return mergedArray[Math.floor(Math.random() * mergedArray.length)];
}

function generatePassword() {
  let passwordLength = prompt(`Kindly enter the length of your password (minimum of 8 characters).`);
  if (passwordLength < 8) {
    alert(`Password length must be at least 8 characters.`);
    return ``;
  }

  let options = getPasswordOptions();
  let selectedChar = ``;

  if (options.specialCharOpt) {
    selectedChar += specialCharacters.join(``);
  }
  if (options.numericCharOpt) {
    selectedChar += numericCharacters.join(``);
  }
  if (options.lowercaseCharOpt) {
    selectedChar += lowerCasedCharacters.join(``);
  }
  if (options.upperCaseCharOpt) {
    selectedChar += upperCasedCharacters.join(``);
  }

  if (selectedChar === ``) {
    alert(`Kindly select at least one character type.`);
    return '';
  }

  let password = ``;
  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(selectedChar);
  }
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password; 
}; 

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
