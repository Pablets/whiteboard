import React from 'react'
import Dropdown from './menu/Dropdown'
import FlexContainer from './menu/FlexContainer'

const Header = () => {
  return (
    <header className='top-0 bg-yellow-500 py-4 flex justify-end w-screen px-8 items-center fixed'>
      <h1 className='pr-4 text-5xl font-bold text-gray-600'>Playground</h1>
      <Dropdown icon={'fas fa-user'} label={null}>
        <FlexContainer />
      </Dropdown>
    </header>
  )
}

export default Header
