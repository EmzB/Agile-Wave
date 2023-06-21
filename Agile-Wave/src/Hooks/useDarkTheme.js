import React, {useState, useEffect} from 'react'
function useDarkTheme() {
    const [theme, setTheme]= useState(localStorage.theme)
    const toggledTheme = theme ==='dark'? 'light': 'dark'

 useEffect(()=> {
    const root = window.document.documentElement
    root.classList.add(theme)
    localStorage.setItem('theme', theme)

}, [theme])


  return (
   [setTheme, toggledTheme]  )
}

export default useDarkTheme