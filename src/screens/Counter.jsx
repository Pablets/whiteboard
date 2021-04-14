import React from 'react'

import { useCounter } from '../context/counter'

function Counter() {
  const [state, dispatch] = useCounter()
  const increment = () => dispatch({ type: 'increment' })
  const decrement = () => dispatch({ type: 'decrement' })
  return (
    <div className='m-8'>
      <div>Current Count: {state.count}</div>
      <button className={grayButton} onClick={decrement}>
        -
      </button>
      <button className={grayButton} onClick={increment}>
        +
      </button>
    </div>
  )
}

const grayButton =
  'focus:outline-none focus:bg-gray-400 ml-2 bg-gray-200 text-gray-700 text-2xl w-10 inline-flex justify-center items-center font-bold px-2 py-1 rounded'

export default Counter
