import React from 'react'
import { useSelector } from 'react-redux'
import boardIcon from '../assets/board.svg'
function DropdownMenu({setdropDown}) {

    const boards = useSelector((state)=> state.boards)
    console.log(boards)
  return (
    <div className='py-10 px-6  bg-blue-200 left-0 right-0 bottom-[-100vh] top-20 absolute'
        onClick={(e)=> {
            if (e.target !== e.currentTarget){
            return
            }
            setdropDown(false)
            console.log(e.currentTarget)
        }}>
        <div className=' w-full py-4 rounded-xl bg-green-100'>
            <h3 className='
            text-black-800 mx-4 mb-8'>All Boards: {boards?.length}</h3>
            <div>
                {boards.map((board, index)=> (
                     <div key={index}
                        className='flex py-2 '> 
                        <img src={boardIcon} className='px-2' /> 
                        <p className='px-2 text-lg'>{board.name}</p>
                        </div>
                )
                   
                )}
            </div>

        </div>
    </div>
  )
}

export default DropdownMenu