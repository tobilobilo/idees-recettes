import * as React from 'react';
import HamburgerButton from './ui/HamburgerButton';
import Logo from './ui/Logo';
import Navbar from './ui/Navbar';

function Header() {

  return (
    <header className="bg-lime-500 font-body font-normal sm:bg-transparent sm:border-t-8 sm:border-lime-500">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto py-2 px-4 md:px-8">
        <div className='flex items-center gap-2'>
          <Logo classNames="w-10 fill-white sm:fill-lime-500 sm:w-16" />
          <span className="text-stone-800 italic lg:text-lg">Mes Idées Recettes</span>
        </div>
        <HamburgerButton />
        <Navbar />
      </div>
    </header>
  )
}
export default Header;
