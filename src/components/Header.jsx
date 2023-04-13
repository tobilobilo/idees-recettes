import * as React from 'react';
import HamburgerButton from './ui/HamburgerButton';
import Logo from './ui/Logo';
import Navbar from './ui/Navbar';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-lime-500 font-body font-normal sm:bg-transparent sm:border-t-8 sm:border-lime-500 relative z-10">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto py-2 px-4 md:px-8">
        <div className='flex items-center gap-2'>
          <Logo classNames="w-10 fill-white sm:fill-lime-500 sm:w-16" />
          <span className="text-white sm:text-stone-800 italic lg:text-lg">Mes Idées Recettes</span>
        </div>
        <HamburgerButton menuOpen={menuOpen} setMenuOpen={ setMenuOpen } />
        <Navbar menuOpen={menuOpen} />
      </div>
    </header>
  )
}
export default Header;
