import React from 'react'
import { useSelector } from 'react-redux'

function DropdownMenu({setdropDown}) {

    const boards = useSelector((state)=> state.boards)
    console.log(boards)
  return (
    <div className='py-10 px-6  bg-blue-400 left-0 right-0 bottom-[-100vh] top-16 absolute'
        onClick={(e)=> {
            if (e.target !== e.currentTarget){
            return
            }
            setdropDown(false)
            console.log(e.currentTarget)
        }}>
        <div className='bg-pink-300 w-full py-4 rounded-xl'>
            <h3 className='
            text-black-800 mx-4 mb-8'>All Boards</h3>

        </div>
    </div>
  )
}

export default DropdownMenu