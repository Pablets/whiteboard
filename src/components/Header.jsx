import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useMediaQuery } from 'react-responsive'
import useRootClose from 'react-overlays/useRootClose'
import Dropdown from './Dropdown'
// import { FaUser } from 'react-icons/fa';
// import { motion } from 'framer-motion'

const Header = () => {
  //   const isDesktop = useMediaQuery({
  //     query: '(min-device-width: 1224px)',
  //   })

  const ref = useRef()
  const [show, setShow] = useState(false)
  const handleRootClose = () => setShow(false)

  useRootClose(ref, handleRootClose, {
    disabled: !show,
  })

  //   const showItemCount = ''
  //   const cartItems = ''
  //   const userInfo = ''

  return (
    <header className='flex px-4 justify-between'>
      <h1 className='text-5xl font-bold text-gray-600'>
        Age of empires civilizations
      </h1>
      <Dropdown icon={'fas fa-user'} label={'Just a label'}>
        <div>
          <NavLink to='/home' activeClassName='text-white'>
            <button className='ml-7 focus:outline-none'>
              <span className='font-sans font-normal text-base'>Home</span>
            </button>
          </NavLink>
          <NavLink to='/autocomplete' activeClassName='text-white'>
            <button className='ml-7 focus:outline-none'>
              <span className='font-sans font-normal text-base'>
                Autocomplete
              </span>
            </button>
          </NavLink>
          <button onClick={console.log('go right')}>Go right</button>
          <h1>otro item</h1>
          <h1>otro item</h1>
          <h1>otro item</h1>
        </div>
      </Dropdown>
    </header>
  )
}

export default Header
