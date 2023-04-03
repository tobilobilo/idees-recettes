import * as React from 'react';
import foodLogo from './assets/svg/food-logo.svg'
import Navbar from './Navbar';

function Header() {

  

  return (
    <>
      <img src={foodLogo} className="logo-food svg-white" alt="Logo Mes Idées Recettes" width="40" />
      Mes Idées Recettes
      <Navbar />
    </>
  )
}
export default Header;
