import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className=' text-yellow-500 font-bold text-4xl z-20'>Traveliing</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20  text-yellow-500 cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-blue-600/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <a href="#">
          <li className='font-bold text-3xl p-8'>Accueil</li>
          <li className='font-bold text-3xl p-8'>Destinations</li>
          <li className='font-bold text-3xl p-8'>Réservations</li>
          <li className='font-bold text-3xl p-8'>Chambres</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
