import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  const [state, setState] = useState(true)

  const div1Ref = React.useRef()

  const div2Ref = React.useRef()

  const [menuHeight, setMenuHeight] = React.useState(null)

  React.useLayoutEffect(() => {
    if (state) {
      setMenuHeight(div1Ref.current.children.length * 2 + 1)
    } else {
      setMenuHeight(div2Ref.current.children.length * 2 - 2)
    }
  }, [state])

  return (
    <header className='flex justify-between px-8 items-center'>
      <h1 className='text-5xl font-bold text-gray-600'>Playground</h1>
      <Dropdown icon={'fas fa-user'} label={null}>
        <motion.div
          style={{ height: `${menuHeight}rem` }}
          className={`transition-all duration-700 w-72 ${
            !state
              ? 'transform-gpu -translate-x-36'
              : 'transform-gpu translate-x-0'
          }`}>
          <div className='flex justify-evenly box-border'>
            <div
              ref={div1Ref}
              className='pt-10 w-36 text-gray-300 flex flex-col font-bold'>
              <button
                className='hover:bg-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 text-left font-bold flex items-center px-2 mx-2 box-border rounded'
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div1Ref.current.clientHeight)
                }}>
                <h1>Go right</h1>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-2 h-7 w-7'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <div className='hover:bg-gray-500  px-2 mx-2'>
                <Link to='/'>Home</Link>
              </div>
              <div className='hover:bg-gray-500  px-2 mx-2'>
                <Link to='/autocomplete'>Autocomplete</Link>
              </div>
              <div className='hover:bg-gray-500  px-2 mx-2'>
                {' '}
                <Link to='/counter'>Counter</Link>
              </div>
              <div className='hover:bg-gray-500 px-2 mx-2'>
                {' '}
                <Link to='/usereducer'>useReducer</Link>
              </div>
            </div>
            <div
              ref={div2Ref}
              className='pt-10 w-36 text-gray-300 flex flex-col justify-between font-bold'>
              <button
                className='focus:outline-none focus:ring-0 focus:ring-offset-0 text-left font-bold flex items-center hover:bg-gray-500  px-2 mx-2 box-border rounded'
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div2Ref.current.clientHeight)
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <h1>Go left</h1>
              </button>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>
                <Link to={'/flexiblecompoundcomponents'}>Compound</Link>
              </h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
              <h1 className='hover:bg-gray-500  px-2 mx-2'>otro item</h1>
            </div>
          </div>
        </motion.div>
      </Dropdown>
    </header>
  )
}

export default Header
