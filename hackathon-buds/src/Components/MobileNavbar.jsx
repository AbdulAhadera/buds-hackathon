import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdContactPhone } from "react-icons/md";
import { IoMdHome } from 'react-icons/io';
import { IoIosGitNetwork } from "react-icons/io";
import { ImCross } from 'react-icons/im';
import { TiGroup } from "react-icons/ti";
import '../StyleSheets/MobileNav.css';
import 'animate.css';

function MobileNavbar() {
  let [openNav, setOpenNav] = useState(false);
  let [isAnimating, setIsAnimating] = useState(false);

  const toggleNavbar = () => {
    setIsAnimating(true);

    if (openNav) {
      setTimeout(() => {
        setOpenNav(false);
        setIsAnimating(false);
      }, 50);
    } else {
      setOpenNav(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  return (
    <nav className='nav'>
      <div className={`nav-container ${openNav ? 'open' : ''} ${isAnimating ? 'animating' : ''}`} onClick={toggleNavbar}>
        {!openNav && <FaBars size={24} className='bar' />}
        {openNav && <ImCross size={24} className='bar cross' />}

        <div className='icon-div-1'><IoMdHome size={25} className='icon' /></div>
        <div className='icon-div-2'><TiGroup size={25} className='icon' /></div>
        <div className='icon-div-3'><MdContactPhone size={22} className='icon' /></div>
        <div className='icon-div-4'><IoIosGitNetwork size={25} className='icon' /></div>
      </div>
    </nav>
  );
}

export default MobileNavbar;