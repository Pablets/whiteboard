import React from 'react'

const RightMenuButton = ({ handleClick }) => {
  return (
    <button
      className='mb-2 focus:outline-none focus:ring-0 focus:ring-offset-0 text-left font-bold flex items-center px-2 mx-2 rounded'
      onClick={handleClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='bg-gray-500 rounded-full p-1 h-7 w-7 hover:bg-gray-400 mb-1'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  )
}

export default RightMenuButton
