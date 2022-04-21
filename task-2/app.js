const validateName = () => {
    if (document.querySelector('#name').value.length < 4) {
        alert('Minimum 4 characters required in field Name');
        return false;
    } return true;
}

const validateEmail = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email').value)) {
        alert('Invalid Email');
        return false;
    } return true;
}

const validatePass = () => {
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(document.querySelector('#password').value)) {
        alert('Password must have at least 6 characters, one special character and one numerical character');
        return false;
    } return true;
}

document.querySelector('button').onclick = (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePass()) alert('All validations passed');
    else location.reload();
}