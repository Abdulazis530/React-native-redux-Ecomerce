export const emailValidation = (email) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

export const passwordValidation = (password) => {
    const passwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passwFormat)) {
        return true;
    } else {
        return false;
    }
}