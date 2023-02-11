import React from 'react'
import Group1 from './img/logo.png';
const Header = () => {
  return (
    <header className="fixer z-50 w-screen p-6 px-16 ">
      {/* desktop & tablet */}
      <div className=" hidden md:flex w-full h-full">
        <div className='flex items-center gap-2'>
          <img src={Group1} className="w-9 object-cover" alt='Logo' />
          <p className="text-headingColor text-x1 font-semibold">Eat 24</p>
        </div>
        <ul className='flex items-center gap-8 ml-auto'>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">Home</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">Menu</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">About Us</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">Service</li>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full">

      </div>
    </header>
  )
}

export default Header
