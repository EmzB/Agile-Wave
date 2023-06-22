import React from 'react'
import logo from '../assets/logo.svg' 
import upArrow from '../assets/upArrow.svg' 
import downArrow from '../assets/downArrow.svg'

function Header() {

  const [Dropdown , setDropdown]= useState(false);
  const downArrowActive= () => {
    setDropdown((state)=> !state)
  }
  return (
    <div className='bg-white p-4 fixed left-0 right-0 '>
      <header className='flex justify-between items-center'> 
      {/** To the left to the left */}
      <div className= 'flex items-center bg-white-300 space-x-2 md:space-x-4'>
        <img src={logo} alt='logo'className='h-6 w-6'></img>
        <h3 className=' hidden md:4-xl md:inline-block font-bold font-sans'>
          Agile Wave</h3>
        <div className='flex items-center'>
          <h3 className='max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans
          '> 
            {/**board.name */}
          </h3>
        
          <img 
          src={ Dropdown? downArrow: upArrow}
          alt='Arrow down'
          className='w-3 ml-2 md:hidden'
          onClick={downArrowActive}
          />
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