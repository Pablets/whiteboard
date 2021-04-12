import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useMediaQuery } from 'react-responsive'
import useRootClose from 'react-overlays/useRootClose'
import Dropdown from './Dropdown'
// import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Header = () => {
  //   const isDesktop = useMediaQuery({
  //     query: '(min-device-width: 1224px)',
  //   })

  const ref = useRef()
  const [show, setShow] = useState(false)
  const [state, setState] = useState(true)
  const handleRootClose = () => setShow(false)

  useRootClose(ref, handleRootClose, {
    disabled: !show,
  })

  const div1Ref = React.useRef()

  const div2Ref = React.useRef()

  const [menuHeight, setMenuHeight] = React.useState(null)
//   const [menuWidth, setMenuWidth] = React.useState(null)

//   console.log(menuHeight)

  React.useEffect(() => {
    if (!menuHeight || menuHeight !== div1Ref.current.clientHeight) {
      setMenuHeight(div1Ref.current.clientHeight)
    } else if (!menuHeight || menuHeight !== div2Ref.current.clientHeight) {
      setMenuHeight(div2Ref.current.clientHeight)
    }
  }, [state])

  return (
    <header className='flex justify-between'>
      <h1 className='text-5xl font-bold text-gray-600'>
        Age of empires civilizations
      </h1>
      <Dropdown icon={'fas fa-user'} label={null}>
        <motion.div
          style={{ height: menuHeight }}
          className={`transition-all duration-500 w-72 ${
            !state
              ? 'transform-gpu -translate-x-36'
              : 'transform-gpu translate-x-0'
          }`}>
          <div
          style={{ height: menuHeight }}
          className='flex justify-evenly'>
            <div ref={div1Ref} className='p-4 h-28 w-36'>
              <button
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div1Ref.current.clientHeight)
                }}>
                Go right
              </button>
              <h1>otro item</h1>
              <h1>otro item</h1>
              <h1>otro item</h1>
            </div>
            <div ref={div2Ref} className='p-4 h-80 w-36'>
              <button
                onClick={() => {
                  setState(!state)
                  setMenuHeight(div2Ref.current.clientHeight)
                }}>
                Go left
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
            </div>
          </div>
        </motion.div>
      </Dropdown>
    </header>
  )
}

export default Header
