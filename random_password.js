// Random Password Generator

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%&*()_+-=";
    let allowedchars = "";
    let password = "";

    allowedchars += includeLowercase ? lowercasechars : "";
    allowedchars += includeUppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberchars : "";
    allowedchars += includeSymbols ? symbolchars : "";

    if(passwordLength <= 0){
        return '(password length must be at least 1)';
    }
    if(allowedchars.length === 0){
        return '(At least 1 set of character needs to be selected !)';
    }
    // console.log(1);
    for(let i = 0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
        // console.log(`password = ${password}`);
    }
// console.log(2);
    return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password1   = generatePassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);
console.log(`Generated password : ${password1}`);