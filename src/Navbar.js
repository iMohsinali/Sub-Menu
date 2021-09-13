import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { OpenSidebar, OpenSubMenu, CloseSubMenu } = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    OpenSubMenu(page, { center, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      CloseSubMenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={OpenSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;