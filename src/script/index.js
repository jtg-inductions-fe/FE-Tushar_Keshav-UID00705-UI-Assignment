let hamburgerIcon = document.getElementsByClassName('header__hamburger')[0];
let isMenuOpen = false;
let mainMenu = document.getElementsByClassName('main-menu')[0];
const icon = document.getElementsByClassName('icon-Menu')[0];
if (hamburgerIcon && mainMenu) {
    hamburgerIcon.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            // main_menu.style.display = "inline-block";
            hamburgerIcon.style.background = '#002f52';
            icon.style.setProperty('--icon-color', '#fff');
        } else {
            hamburgerIcon.style.backgroundColor = '#fff';
            // main_menu.style.display = "none";
            icon.style.setProperty('--icon-color', '#002f52');
        }
        mainMenu.classList.toggle('is-open', isMenuOpen);
    });
}
