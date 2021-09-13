import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const [loacation, setloaction] = useState({})
    const OpenSidebar = () => {
        setSidebarOpen(true)
    }
    const CloseSidebar = () => {
        setSidebarOpen(false)
    }
    const OpenSubMenu = (text, coordinates) => {
        setloaction(coordinates)
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
        CloseSubMenu,
        loacation
    }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}


