"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import "boxicons";

const Header = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className='z-20 w-full bg-transparent absolute'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <div className="flex items-center text-2xl">
            <span className="font-semibold">DoCoding</span>
            <box-icon name='minus' rotate='90' animation='flashing' color='#ffffff' ></box-icon>
          </div>
          <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`} />
          {/* start component navbar */}
          <Navbar containerStyle='hidden md:flex ' />
          {/* end component navbar */}
          <div className=''>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
