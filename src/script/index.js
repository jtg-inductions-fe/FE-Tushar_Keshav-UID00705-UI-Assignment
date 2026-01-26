let hamburgerIcon = document.getElementsByClassName('header__hamburger')[0];
let isMenuOpen = false;
let mainMenu = document.getElementsByClassName('main-menu')[0];
const icon = document.getElementsByClassName('icon-Menu')[0];
const isDesktop = window.matchMedia('(min-width: 1024px)');

function closeMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        icon.style.setProperty('--icon-color', '#fff');
    } else {
        icon.style.setProperty('--icon-color', '#002f52');
    }
    hamburgerIcon.classList.toggle('is-menu-open', isMenuOpen);
    mainMenu.classList.toggle('is-menu-open', isMenuOpen);
}

if (hamburgerIcon && mainMenu && icon) {
    hamburgerIcon.addEventListener('click', closeMenu);
}
document.addEventListener('click', (event) => {
    if (
        mainMenu.classList.contains('is-menu-open') &&
        !mainMenu.contains(event.target) &&
        !hamburgerIcon.contains(event.target)
    ) {
        closeMenu();
    }
});

isDesktop.addEventListener('change', () => {
    if (mainMenu.classList.contains('is-menu-open')) {
        closeMenu();
    }
});
