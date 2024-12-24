import React from 'react'
import {createContext, useState} from 'react'
import FunctionContext from './functionContext.jsx'
import ClassContext from './ClassContext.jsx'
export const ThemeContext=createContext()
export default function ToggleTheme({children}){
    const [darkTheme, setDarkTheme]=useState(true)
    function toggleTheme(){setDarkTheme(prevDarkTheme=> !prevDarkTheme) }
    
  return (
<ThemeContext.Provider value={darkTheme}>
    <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
      <FunctionContext/>
      <ClassContext/>
    </ThemeContext.Provider>
  )
}
