import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  const [state, setState] = useState(true)

  const div1Ref = React.useRef()

  const div2Ref = React.useRef()

  const [menuHeight, setMenuHeight] = React.useState(null)

  React.useEffect(() => {
    if (state) {
      setMenuHeight(div1Ref.current.children.length * 2)
    } else {
      setMenuHeight(div2Ref.current.children.length * 2 - 5)
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
          <div className='flex justify-evenly'>
            <div
              ref={div1Ref}
              className='pt-4 h-32 w-36 text-gray-300 flex flex-col justify-between font-bold'>
              <button
                className='focus:outline-none focus:ring-0 focus:ring-offset-0 text-left font-bold'
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div1Ref.current.clientHeight)
                }}>
                <h1>Go right</h1>
              </button>
              <div>
                <Link to='/'>Home</Link>
              </div>
              <div>
                <Link to='/autocomplete'>Autocomplete</Link>
              </div>
              <div>
                {' '}
                <Link to='/counter'>Counter</Link>
              </div>
              <div>
                {' '}
                <Link to='/usereducer'>useReducer</Link>
              </div>
            </div>
            <div
              ref={div2Ref}
              className='pt-4 w-36 text-gray-300 flex flex-col justify-between font-bold'>
              <button
                className='focus:outline-none focus:ring-0 focus:ring-offset-0 text-left font-bold'
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div2Ref.current.clientHeight)
                }}>
                <h1>Go left</h1>
              </button>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
            </div>
          </div>
        </motion.div>
      </Dropdown>
    </header>
  )
}

export default Header
