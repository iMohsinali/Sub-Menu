import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { OpenSidebar, OpenSubMenu, CloseSubMenu } = useGlobalContext();
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={OpenSidebar}>
            <FaBars /> </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>Product</button>
          </li>
          <li>
            <button className='link-btn'>developers</button>
          </li>
          <li>
            <button className='link-btn'>Company</button>
          </li>

        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>

  )
}

export default Navbar
