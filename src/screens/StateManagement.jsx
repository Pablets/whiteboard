import React from 'react'

const DivContext = React.createContext()

function DivProvider({ onSetOn, children }) {
  const [on, setOn] = React.useState(false)

  const toggle = () => setOn(!on)
  return (
    <DivContext.Provider
      value={{
        on,
        toggle,
      }}>
      {children}
    </DivContext.Provider>
  )
}

function useContex() {
  const context = React.useContext(DivContext)
  if (!context) {
    throw new Error('useToggle must be used within a <Toggle/>')
  }
  return context
}

function Child() {
  const { on } = useContex()
  return on ? <h1>on</h1> : <h1>Off</h1>
}

const StateManagement = () => {
  return (
    <div className='mt-20'>
      <DivProvider>
        <div>
          <div>
            <Child />
          </div>
        </div>
      </DivProvider>
    </div>
  )
}

export default StateManagement
