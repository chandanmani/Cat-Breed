import React from 'react'

import Paw from '../Images/paw-color-icon.svg'

function Navbar() {
  return (
    <div className='bg-black text-white flex'>
        <>
      
            <img className='w-[50px] h-[50px] m-[20px]' src={Paw} alt="error" />
            <ul className='flex p-4'>
                <a href=""><li className='p-4 text-xl hover:text-orange-600'>Home</li></a>
                <a href=""><li className='p-4 text-xl hover:text-orange-600'>Adopt Dog</li></a>
                <a href=""><li className='p-4 text-xl hover:text-orange-600'>About</li></a>
                <a href=""><li className='p-4 text-xl hover:text-orange-600'>Contact</li></a>
            </ul>
          
        </>


    </div>
  )
}

export default Navbar