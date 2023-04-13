import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from './Logo';

const Navbar = ({ menuOpen }) => {
    const navItems = [
        {name: 'Accueil', path: '/'}, 
        {name: 'Mes recettes', path: '/mes-recettes'}, 
        {name: 'Glossaire', path: '/glossaire'}, 
        {name: 'Admin', path: '/admin'}
    ];
    const { pathname } = useLocation();
    console.log(pathname);

    const closeMenu = () => {
        document.querySelector('[data-element="btn-menu"]').click();
    }

    return ( 
        <div data-element="menu" className={`fixed w-64 h-screen top-0 left-0 -translate-x-64 transition duration-300 bg-white 
        sm:bg-transparent sm:-translate-x-0 sm:relative sm:w-auto sm:h-auto ${ (menuOpen) ? "translate-x-0 drop-shadow-xl" : "" }`}>
            <Logo classNames="fill-lime-500 m-auto w-28 h-28 p-4 sm:hidden" />
            <nav className="sm:flex sm:flex-row sm:gap-4 md:gap-6 lg:gap-8">
                {navItems.map(({name, path}) => (
                    <Link onClick={ closeMenu } key={ name } to={ path } 
                        className={`block text-center py-4 border-t border-slate-200 first:border-0 transition-all 
                        hover:bg-stone-100 hover:text-lime-500
                        sm:after:content-['']  sm:after:h-0.5 sm:after:block sm:after:bg-lime-400 sm:after:transition-all sm:hover:bg-transparent
                        sm:border-0 sm:py-0 sm:text-lime-500 hover:sm:text-stone-600 lg:text-lg
                        ${ (pathname === path) ? 
                            "bg-stone-100 text-lime-500 sm:text-stone-600 sm:bg-transparent sm:after:w-full" : 
                            "bg-transparent text-stone-800 sm:after:w-0 sm:hover:after:w-full" }`}>
                            {name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
 
export default Navbar;