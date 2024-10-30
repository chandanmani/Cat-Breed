import React from 'react';

function Inputbar({ value, setValue,click }) {
  const handleChange = (event) => {
    setValue(event.target.value); // Update the input value in App
  };

  return (
    <div className='bg-black text-white p-6'>
      <>
        <p className='text-2xl p-7 font-bold text-center text-orange-400'>
          🐱 Discover the Fascinating World of Cat Breeds!
        </p>
        <div className="text-center">
          <input
            id='inputvalue'
            className='bg-slate-50 text-black font-semibold text-2xl p-3 w-[300px] mb-[20px]'
            value={value}
            type="text"
            onChange={handleChange}
            required
            placeholder='Enter Cat Breeds'
          />
          <button
            onClick={click} // Use onClick to trigger fetch
            className='bg-orange-400 p-2 w-[100px] rounded-sm m-4'
            id='btn'
          >
            Submit
          </button>
        </div>
      </>
    </div>
  );
}

export default Inputbar;
