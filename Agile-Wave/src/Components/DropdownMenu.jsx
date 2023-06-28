import React from 'react'

function DropdownMenu({setdropDown}) {
  return (
    <div className='left-0 right-0 bg-blue-200 py-10 px-6 top-20'
        onClick={(e)=> {
            console.log(e.target)
            setdropDown(false)
        }}>
        <div className='bg-pink-300 w-full py-4 rounded-xl'>
            <h3 className='
            text-black-800 mx-4 mb-8'>All Boards</h3>

        </div>
    </div>
  )
}

export default DropdownMenu