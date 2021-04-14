import React from 'react'
import { useCycle } from 'framer-motion'
import { Frame } from 'framer'

const Dropdown = ({ icon, label, children }) => {
  const [twist, cycle] = useCycle(0, 1)

  return (
    <div>
      <div onMouseLeave={() => twist === 1 && cycle()}>
        <button
          className='rounded-full text-decoration-none text-white outline-none focus:outline-none focus:ring-0 p-2 leading-10 h-10 flex bg-gray-600 relative z-20'
          onClick={() => cycle()}>
          {!twist ? (
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
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          )}

          <span className='font-sans font-normal text-xl leading-6 align-middle'>
            {label && label}
          </span>
        </button>
        <Frame
          position={'relative'}
          size={0}
          background={null}
          initial={{ scale: 0 }}
          originY={0}
          originX={0}
          animate={{ scale: twist, opacity: twist }}
          transition={{duration: 0.4}}>
          <div className='bg-gray-600 w-28 overflow-hidden rounded-md -m-8 box-content p-4 absolute z-10 right-0'>
            {children}
          </div>
        </Frame>
      </div>
    </div>
  )
}

export default Dropdown
