import React from 'react'
import { Link } from 'react-router-dom'


const MenuLink = ({ to, label }) => {
  return (
    <div className='hover:bg-gray-500 py-1 w-52 px-2 mx-2 rounded'>
      <Link className='text-xl font-semibold' to={to}>
        {label}
      </Link>
    </div>
  )
}

export default MenuLink
