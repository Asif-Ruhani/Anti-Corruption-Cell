
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



// Open Menu options when click the the lines menu bar
const OpenMenuOptions = () =>{
    const MenuOptions=document.getElementById('MenuOptions');
    if(MenuOptions.style.display === "none" || MenuOptions.style.display === ""){
        MenuOptions.style.display= "block";   // options showed
    }
    else {
        MenuOptions.style.display = "none";  // option closed
    }
}