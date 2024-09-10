let isMenuOpen = false;


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


// Toggle the manu for small devices
function toggleMenu() {
    const LanguagImage=document.getElementById('LanguageImage');
    LanguagImage.classList.add('DisplayHidden');

    const menu = document.getElementById('menu');

    if (menu.style.display === "block"){
            menu.style.display = "none";
       } 
    else{
        menu.style.display = "block";
      }
}



// Toggle Language option
const ToggleLanguage = () => {
    const Language=document.getElementById('DropDownContent');

    if(Language.style.display === "block"){
        Language.style.display = "none";
    }
    else{
        Language.style.display = "block";
    }
}