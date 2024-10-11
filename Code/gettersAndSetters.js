
const myPassword = {
    _password: 'radio',
    get password() {
        return this._password;
    },
    set password(newPassword) {
        if (typeof newPassword === 'string' && newPassword.length > 4) {
            this._password = newPassword; 
        } else {
            console.log('ERROR: password must be a non-empty string of length 4+.'); 
        }
    }
}

myPassword.password = 'Gee';
// Prints: 'ERROR: password must be a non-empty string of length 4+.'

console.log(myPassword.password); // Prints 'radio'



