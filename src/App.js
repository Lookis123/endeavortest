import React from 'react'
import useSticky from './hooks/StickyNav.js'
import Welcome from './components/Header/Welcome'
import Navbar2 from './components/Header/NavBar2'
import ToggleColorMode from './components/ToggleColorMode.js'
function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            
            <Navbar2 sticky={isSticky} />
            <Welcome element={element} />       
            <ToggleColorMode />
        </>
    )
}

export default App
