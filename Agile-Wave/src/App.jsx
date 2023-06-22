import React from 'react'
import useDarkTheme from './Hooks/useDarkTheme'
import Header from './Components/Header'

function App() {
const [setTheme, toggledTheme]= useDarkTheme()
const changeTheme= () =>setTheme(toggledTheme)

  return (
  <Header/>
    )
}

export default App