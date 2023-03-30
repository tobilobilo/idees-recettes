import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

const Navbar = () => {
    return ( 
        <nav className="navigation">
            <ul>
                <li>
                    <Button component={RouterLink} variant="contained" to="/">Accueil</Button>
                </li>
                <li>
                    <Button component={RouterLink} variant="contained" to="/glossaire">Glossaire</Button>
                </li>
                <li>
                    <Button component={RouterLink} variant="contained" to="/admin">Admin</Button>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;