import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        {name: 'Accueil', path: '/'}, 
        {name: 'Glossaire', path: '/glossaire'}, 
        {name: 'Admin', path: '/admin'}
    ];

    return ( 
        <>
            {navItems.map(({name, path}) => (
                <Link key={name} to={path}>
                    {name}
                </Link>
            ))}
        </>
    )
}
 
export default Navbar;