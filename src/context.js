import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const [popup, setpop] = useState(false)
    const [location, setloaction] = useState({})
    const [page, setpage] = useState({ page: '', links: [] });
    const OpenSidebar = () => {
        setSidebarOpen(true)
    }
    const ClosePop = () => {
        setpop(true)
    }
    const CloseSidebar = () => {
        setSidebarOpen(false)
    }
    const OpenSubMenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setpage(page);
        setloaction(coordinates)
        setSubMenuOpen(true)
    }
    const CloseSubMenu = () => {
        setSubMenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSubMenuOpen,
        isSidebarOpen,
        page,
        OpenSubMenu,
        OpenSidebar,
        CloseSidebar,
        CloseSubMenu,
        location,
        popup,
        ClosePop
    }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}


