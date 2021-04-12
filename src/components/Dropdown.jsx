import React from 'react'
import { useCycle } from 'framer-motion'
import { Frame } from 'framer'

const Dropdown = ({ icon, label, children }) => {
  const [scaleY, cycle] = useCycle(0, 1)

  return (
    <div>
      <div onMouseLeave={() => scaleY === 1 && cycle()}>
        <button
          className='rounded-full text-decoration-none focus:outline-none p-2 leading-10 h-10 flex bg-red-500 rounded-sm'
          onClick={() => cycle()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          <span className='font-sans font-normal text-xl leading-6 align-middle'>
            {label && label}
          </span>
        </button>
        <Frame
          className='relative'
          background={null}
          initial={{ scaleY: 0 }}
          originY={0}
          animate={{ scaleY: scaleY, opacity: scaleY }}>
          <div className='bg-yellow-600 w-28 overflow-hidden absolute right-40 rounded-md'>
            {children}
          </div>
        </Frame>
      </div>
    </div>
  )
}

export default Dropdown
