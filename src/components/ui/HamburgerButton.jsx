const HamburgerButton = ({ menuOpen, setMenuOpen }) => {

    function toggleMenu() {
      setMenuOpen(!menuOpen)
    }

    return ( 
        <button className={`block w-10 h-10 sm:hidden`} data-element="btn-menu" onClick={ toggleMenu } aria-expanded={menuOpen} aria-label={ (menuOpen) ? "Fermer le menu" : "Ouvrir le menu" }>
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