const HamburgerButton = () => {
    const toggleMenu = () => {
        const btnMenu = document.querySelector('[data-element="btn-menu"]');
        const menu = document.querySelector('[data-element="menu"]');
        if(btnMenu.getAttribute('aria-expanded') === 'false') {
          btnMenu.setAttribute('aria-expanded', 'true');
          btnMenu.setAttribute('aria-label', btnMenu.getAttribute('data-label-opened'));
          menu.classList.add('translate-x-0');
          menu.classList.add('drop-shadow-xl');
        } else {
          btnMenu.setAttribute('aria-expanded', 'false');
          btnMenu.setAttribute('aria-label', btnMenu.getAttribute('data-label-closed'));
          menu.classList.remove('translate-x-0');
          menu.classList.remove('drop-shadow-xl');
        }
      }

    return ( 
        <button className="block w-10 h-10 sm:hidden" data-element="btn-menu" onClick={toggleMenu} aria-expanded="false" aria-label="ouvrir le menu" data-label-opened="fermer le menu" data-label-closed="ouvrir le menu">
            <svg version="1.1" id="hamburger" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 100 100">
            <rect x="10" y="20.5" className="st0 fill-white" id="hamburgerstrip1" width="80" height="10"/>
            <rect x="10" y="45" className="st0 fill-white" id="hamburgerstrip2" width="80" height="10"/>
            <rect x="10" y="69.5" className="st0 fill-white" id="hamburgerstrip3" width="80" height="10"/>
            </svg>
        </button>
     );
}
 
export default HamburgerButton;