import React from 'react'
import logo from '../assets/logo.jpg' 

function Header() {
  return (
    <div className='bg-red-300 p-4 fixed left-0 white-0 '>
      <header className='flex justify-between items-center'> 
      {/** To the left to the left */}
      <div className= 'flex items-center bg-blue-300 space-x-2 md:space-x-4'>
        <img src={logo} alt='logo' className='h-12 w-10'></img>
        <h3 className='hidden md:4-xl md: inline-block font-bold font-sans '>
          Agile Wave</h3>
        <div className='flex items-center'>
          <h3 className='max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans
          '> Board
            {/**board.name */}
          </h3>
          <img 
           src={isDropdown? upArrow: downArrow}>
            alt='downArrow'
            className='w-3 ml-2 md:hidden'
          </img>
        </div>

      </div>

      {/** To the right to the right */}
      <div>
        <button>

        </button>
        <button>

        </button>
      </div>


      </header>
    </div>
  )
}

export default Header