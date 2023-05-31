import { useState } from 'react'
import boxLogo from './assets/box.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/EmzB" target="_blank">
          <img src={boxLogo} className="logo" alt="cute box" />
        </a>
      </div>
      <h1> Bella testing Vite </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the box to visit my Github
      </p>
    </>
  )
}

export default App
