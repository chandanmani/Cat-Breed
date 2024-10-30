import React from 'react'

const CatDetail = ({name,image,origin,weight,max_life_expectancy}) => {
  return (
    <div className='bg-orange-500 text-black  w-[full] p-7 m-3 rounded-lg'>
        <h1 className='text-center p-2 text-3xl font-semibold text-white'>{name}</h1>
        <img  className='w-[700px] m-auto p-6' src={image} alt="" />
    <ul>
        <li className='text-center p-2 font-semibold text-xl'>Origin:{origin}</li>
        <li className='text-center p-2 font-semibold text-xl '>Weight:{weight}</li>
        <li className='text-center p-2 font-semibold text-xl'>Life Expectancy: {max_life_expectancy}</li>
    </ul>
        
        
        
        
        </div>
  )
}

export default CatDetail