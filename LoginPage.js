
let isMenuOpen = false;


// Open registration form
const RegistrationFormOpen = () => {
    const RegFormOpen = document.getElementById('RegForm');
    RegFormOpen.classList.remove('DisplayHidden');
    console.log('Registration form opened');


    // When registration button is clicked, menu options will be hidden
    // const MenuOptions=document.getElementById('MenuOptions'); 
    // isMenuOpen = !isMenuOpen;
    
    // if (isMenuOpen) {
    //     MenuOptions.style.display = "block";  // Show the menu when true
    // } else {
    //     MenuOptions.style.display = "none";   // Hide the menu when false
    // }
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
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        MenuOptions.style.display = "block";  // Show the menu when true
    } else {
        MenuOptions.style.display = "none";   // Hide the menu when false
    }
}