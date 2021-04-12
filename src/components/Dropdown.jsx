import React from 'react'
// import { useMediaQuery } from 'react-responsive'
import { useCycle } from 'framer-motion'
import { Frame } from 'framer'
// import useRootClose from 'react-overlays/useRootClose'
// import { list } from 'postcss'

const Dropdown = ({ icon, label, children }) => {
  //   const isDesktop = useMediaQuery({
  //     query: '(min-device-width: 1224px)',
  //   })
  const [scaleY, cycle] = useCycle(0, 1)


//   const listRef = React.useRef()

//   React.useEffect(() => {
//     // console.log(listRef.current.clientHeight)
//     setMenuHeight(listRef.current.clientHeight)
//   }, [])

  //   onMouseLeave={() => scaleY === 1 && cycle()}
  return (
    <div>
      <div className='mr-52'>
        <button
          className='text-decoration-none focus:outline-none p-2 leading-10 h-10 flex bg-red-500 rounded-sm'
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
          originX={0}
          animate={{ scaleY: scaleY, opacity: scaleY }}>
          <div
            className='bg-yellow-600 w-32 overflow-hidden absolute right-40 rounded-md rounded-r-none'>
            {children}
          </div>
        </Frame>
      </div>
    </div>
  )
}

export default Dropdown
