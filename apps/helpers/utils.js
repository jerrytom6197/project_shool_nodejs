function checkRequired(val) {
    if (val.length < 1 && typeof(val) == 'undefined' && val == null) {
        return true;
    }
    return false;
}

function checkEmail(email) {
    var errorEmail = "";
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
    var errorPassword = "";
    if (checkRequired(user.password)) {
        errorPassword = "This field is required";
    } else if (user.password.length < 7) {
        errorPassword = "Password bigger 6 characters.";
    } else if (user.password.length > 100) {
        errorPassword = "Password less 99 characters";
    } else {
        errorPassword = null;
    }
    return errorPassword;
}

function checkRepeatPassword(password,repeatPassword) {
    var errorRepeatPassword = "";
    if (checkRequired(repeatPassword)) {
        errorRepeatPassword = "This field is required";
    } else if (password != repeatPassword) {
        errorRepeatPassword = "password is not match";
    } else {
        errorRepeatPassword = null;
    }
}

function checkFullName(fullname) {
    var errorFullName = "";
    if(checkRequired(fullname)){
        errorFullName = "This field is required";
    }else{
        errorRepeatPassword = null;
    }
}

function checkBirthday(birthday) {
    var errorBirthday = "";
    if(checkRequired(brithday)){
        errorFullName = "birthday field is required";
    }else if(!errorBirthday.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/g)){
        errorBirthday = "Date wrong format";
    }else{
        errorBirthday = null;
    }
}

module.exports = {
    checkEmail: checkEmail,
    checkPassword: checkPassword,
    checkRepeatPassword:checkRepeatPassword,
    checkFullName:checkFullName,
    checkBirthday:checkBirthday
}

