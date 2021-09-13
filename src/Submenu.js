import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
const Submenu = () => {
  const { isSubMenuOpen, loacation } = useGlobalContext();
  const container = useRef(null);
  const { center, bottom } = loacation;
  useEffect(
    () => {
      const submenu = container.current

      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`

    }, [loacation]
  )
  return (
    <aside className={`${isSubMenuOpen ? 'submenu show' :
      'submenu'}`} ref={container} ></aside>
  )
}

export default Submenu
