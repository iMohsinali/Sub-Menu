import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const [isSubMenuOpen, setSubMenuOpen] = useState(true)
    const OpenSidebar = () => {
        setSidebarOpen(true)
    }
    const CloseSidebar = () => {
        setSidebarOpen(false)
    }
    const OpenSubMenu = () => {
        setSubMenuOpen(true)
    }
    const CloseSubMenu = () => {
        setSubMenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSubMenuOpen,
        isSidebarOpen,
        OpenSubMenu,
        OpenSidebar,
        CloseSidebar,
        CloseSubMenu
    }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}


