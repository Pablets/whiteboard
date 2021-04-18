import React from 'react'
import { useCycle } from 'framer-motion'
import { Frame } from 'framer'

const Dropdown = ({ icon, label, children }) => {
  const [twist, cycle] = useCycle(0, 1)

  const divRef = React.useRef()

  function myFunction(e) {
    const withinBoundaries = e.composedPath().includes(divRef.current)

    if (!withinBoundaries) {
      twist === 1 && document.removeEventListener('click', myFunction, false)
      cycle()
    }
  }


  // const mouseLeaveHandler = e => {
  //   e.preventDefault()
  //   setTimeout(() => {
  //     document.removeEventListener('click', myFunction, false)
  //     cycle()
  //   }, 3000)
  // }

  React.useEffect(() => {
    if (twist === 1) {
      document.addEventListener('click', myFunction, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twist])

  return (
    <div ref={divRef}>
      <div>
        <button
          className='rounded-full text-decoration-none text-white outline-none focus:outline-none focus:ring-0 p-2 leading-10 h-10 flex bg-gray-600 relative z-20'
          onClick={() => {
            twist === 1 &&
              document.removeEventListener('click', myFunction, false)
            cycle()
          }}>
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
          className='relative'
          position={'relative'}
          size={0}
          background={null}
          initial={{ scale: 0 }}
          originY={0}
          originX={0}
          animate={{ scale: twist, opacity: twist }}
          transition={{ duration: 0.4 }}>
          <div></div>
          <div
            style={{
              position: 'relative',
              zIndex: 20,
              width: '27px',
              height: '1px',
              borderTop: '2px solid transparent',
              borderTopRightRadius: '50%',
              borderTopLeftRadius: '100px',
              borderLeft: '11px solid transparent',
              borderRight: '11px solid transparent',
              borderBottom: '15px solid rgba(75, 85, 99)',
            }}
            className='ml-2'>
            <div
              style={{
                top: '-1px',
                left: '-0.8px',
                width: '6.5px',
                height: '7px',
              }}
              className='bg-gray-600 absolute rounded-full'></div>
          </div>
          {/* absolute abajo */}
          <div
            // onMouseLeave={mouseLeaveHandler}
            className='-mr-11 bg-gray-600 overflow-hidden rounded-lg absolute z-10 right-0 flex justify-center'>
            {children}
          </div>
        </Frame>
      </div>
    </div>
  )
}

export default Dropdown
