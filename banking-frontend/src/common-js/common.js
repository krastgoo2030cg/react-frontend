

const MSG_PASS_UPPERCASE = "Bitte geben Sie mindestens eine große Buchstabe ein!";
const MSG_PASS_LOWERCASE = "Bitte geben Sie mindestens eine kleine Buchstabe ein!";
const MSG_PASS_NUMBER = "Bitte geben Sie mindestens eine Zahl ein!";
const MSG_PASS_LENGTH = "Bitte geben Sie mindestens 8 Zeichen ein!";
const MSG_PASS_SPEC_CHAR = "Bitte geben Sie mindestens eine Sonderzeichen ein!";


export function validatePassword(password) {

    let msg = '';
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(!password.match(upperCaseLetters)) {  
        console.log("Bitte geben Sie mindestens eine große Buchstabe!");
        msg = msg.trim() ? msg + ", " + MSG_PASS_UPPERCASE : MSG_PASS_UPPERCASE;
    } 

    var lowerCaseLetters = /[a-z]/g;
    if(!password.match(lowerCaseLetters)) {  
        console.log("Bitte geben Sie mindestens eine kleine Buchstabe!");
        msg = msg.trim() ? msg + ", " + MSG_PASS_LOWERCASE : MSG_PASS_LOWERCASE;
    } 

    var numbers = /[0-9]/g;
    if(!password.match(numbers)) {  
        console.log("Bitte geben Sie mindestens eine Zahl ein!");
        msg = msg.trim() ? msg + ", " + MSG_PASS_NUMBER : MSG_PASS_NUMBER;
    } 

    if(password.length < 8 ) {
        console.log("Bitte geben Sie mindestens 8 Zeichen ein");
        msg = msg.trim() ? msg + ", " + MSG_PASS_LENGTH : MSG_PASS_LENGTH;
    }

    var specialCharacters = /[#$&%§()]/g;
    if(!password.match(specialCharacters)) {  
        console.log("Bitte geben Sie mindestens eine Sonderzeichen ein!");
        msg = msg.trim() ? msg + ", " + MSG_PASS_SPEC_CHAR : MSG_PASS_SPEC_CHAR;
    } 

    return msg;
}

export function validatePassword2(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    //const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasSpecialChar = /[#$%&]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least " + minLength + " characters long.";
    }
    if (!hasUpperCase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must contain at least one special character.";
    }
    return "";  //"Password is valid.";
}


// Date Format : 2024-04-06
export const formatShortDate = (d) => {
    let twoDigitMonth=((d.getMonth()+1)>=10) ? (d.getMonth()+1) : '0' + (d.getMonth()+1);  
    let twoDigitDate=((d.getDate())>=10)? (d.getDate()) : '0' + (d.getDate());
    return d.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate;
}