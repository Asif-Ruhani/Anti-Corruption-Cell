
// Open registration form
const RegistrationFormOpen = () => {
    const RegFormOpen = document.getElementById('RegForm');
    RegFormOpen.classList.remove('DisplayHidden');
    console.log('Registration form opened');
}



// Close registration form
const RegistrationCancel = () => {
    const RegCancel = document.getElementById('RegForm');
    RegCancel.classList.add('DisplayHidden');
    console.log('Registration form closed');
}