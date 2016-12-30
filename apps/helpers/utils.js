function checkRequired(val) {
    if (val.length < 1 && typeof(val) == 'undefined' && val == null) {
        return true;
    }
    return false;
}

function checkEmail(email) {
    var errorEmail = "error";
    if (checkRequired(email)) {
        errorEmail = "This field is required";
    } else if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)) {
        errorEmail = "Invalid email address";
    } else {
        errorEmail = null;
    }
    return errorEmail;
}

function checkPassword(password) {
    var errorPassword = "error";
    if (checkRequired(password)) {
        errorPassword = "This field is required";
    } else if (password.length < 7) {
        errorPassword = "Password bigger 6 characters.";
    } else if (password.length > 100) {
        errorPassword = "Password less 99 characters";
    } else {
        errorPassword = null;
    }
    return errorPassword;
}

function checkRepeatPassword(password,repeatPassword) {
    var errorRepeatPassword = "error";
    if (checkRequired(repeatPassword)) {
        errorRepeatPassword = "This field is required";
    } else if (password != repeatPassword) {
        errorRepeatPassword = "password is not match";
    } else {
        errorRepeatPassword = null;
    }
    return errorRepeatPassword;
}

function checkFullName(fullname) {
    var errorFullName = "error";
    if(checkRequired(fullname)){
        errorFullName = "This field is required";
    }else{
        errorFullName = null;
    }
    return errorFullName
}

function checkBirthday(birthday) {
    var errorBirthday = "error";
    // if(!errorBirthday.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/g)){
    //     errorBirthday = "Date wrong format";
    // }else{
    //     errorBirthday = null;
    // }
    errorBirthday = null;
    return errorBirthday
}

module.exports = {
    checkRequired:checkRequired,
    checkEmail: checkEmail,
    checkPassword: checkPassword,
    checkRepeatPassword:checkRepeatPassword,
    checkFullName:checkFullName,
    checkBirthday:checkBirthday
}

