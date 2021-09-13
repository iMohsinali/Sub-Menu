import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { OpenSidebar, OpenSubMenu, CloseSubMenu } = useGlobalContext();
  const displaySubMenu = (e) => {

    const page = e.target.textContext;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3;

    OpenSubMenu(page, { center, bottom })

  }
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
            <button className='link-btn' onMouseOver={displaySubMenu}>Product</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>Company</button>
          </li>

        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>

  )
}

export default Navbar
