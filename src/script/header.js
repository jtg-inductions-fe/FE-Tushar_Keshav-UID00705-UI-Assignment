import variables from '../styles/abstracts/_variables.module.scss';

/**
 * Toggles the visibility of the main navigation menu and updates icon colors.
 *
 * @returns {void}
 */
export function initHeader() {
    const hamburgerIcon = document.querySelector('.header__hamburger');
    const mainMenu = document.querySelector('.main-menu');
    const icon = document.querySelector('.icon-Menu');
    const desktopMediaQuery = `(min-width: ${variables.medium})`;
    const isDesktop = window.matchMedia(desktopMediaQuery);

    if (!hamburgerIcon || !mainMenu || !icon) return;

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;

        const iconColor = isMenuOpen ? variables.white : variables.colorPrimary;
        icon.style.setProperty('--icon-color', iconColor);

        hamburgerIcon.classList.toggle('js-is-menu-open', isMenuOpen);
        mainMenu.classList.toggle('js-is-menu-open', isMenuOpen);
    };

    hamburgerIcon.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = mainMenu.contains(event.target);
        const isClickOnHamburger = hamburgerIcon.contains(event.target);

        if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
            toggleMenu();
        }
    });

    isDesktop.addEventListener('change', (e) => {
        if (e.matches && isMenuOpen) {
            toggleMenu();
        }
    });
}
