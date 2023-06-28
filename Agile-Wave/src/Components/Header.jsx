import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.svg'
import downArrow from '../assets/downArrow.svg'
import upArrow from '../assets/upArrow.svg'
import ellipsis from '../assets/ellipsis.svg'
import DropdownMenu from './DropdownMenu'

function Header() {
   const [dropDown , setdropDown]= useState(false)
   const toggleArrow= ()=>{
    setdropDown((prevState)=> !prevState)
   }

  return (
    <div className='bg-white p-4 fixed left-0 right-0 '>
      <header className='flex justify-between items-center'> 
      {/** To the left to the left */}
      <div className= 'flex items-center bg-white-300 space-x-2 md:space-x-4'>
        <img src={logo} alt='logo'className='w-8'/>
        <h3 className=' hidden md:4-xl md:inline-block font-bold font-sans'>
          Agile Wave</h3>
        <div className='flex items-center'>
          <h3 className='max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans
          '> 
            board here
          </h3>
          <img
          src={dropDown? upArrow : downArrow}
          alt='dropdown'
          onClick={toggleArrow}
          className=' w-3 ml-2 md:hidden'
          />  
          
        </div>

      </div>

      {/** To the right to the right */}
      <div className ='flex space-x-3 items-center md:space-x-5'>
        <button className='button hidden md:block'>
        + New Task
        </button>
        <button className=" button py-1 px-3 md:hidden ">
          +
        </button>
        <img
          src={ellipsis}
          alt='elipsis'
          className='cursor-pointer'
          />
      </div>
      {dropDown && <DropdownMenu/>}


      </header>
    </div>
  )
}

export default Header