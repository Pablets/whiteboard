import React from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import simpleUseReducer from '../markdowns/simpleUseReducer.md'

const myReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      throw new Error(`Don't know what's happenning`)
  }
}

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(myReducer, {
    count: 0,
  })
  const { count } = state

  return (
    <div className='ml-8 mt-24'>
      <div className='m-8 flex'>
        <button
          className={grayButton}
          onClick={() => dispatch({ type: 'decrement' })}>
          -
        </button>
        <button
          className={grayButton}
          onClick={() => dispatch({ type: 'increment' })}>
          +
        </button>
        <h1 className='ml-2 bg-yellow-200 text-gray-700 text-2xl inline-flex justify-center items-center font-bold px-2 py-1 rounded'>
          Count: {count}
        </h1>
      </div>
      <div className='mb-20 flex'>
        <MarkdownRenderer markdown={simpleUseReducer} />
      </div>
    </div>
  )
}

const grayButton =
  'focus:outline-none focus:bg-gray-400 mr-2 w-8 bg-gray-200 text-gray-700 text-2xl inline-flex justify-center items-center font-bold px-2 py-1 rounded'

export default UseReducer
