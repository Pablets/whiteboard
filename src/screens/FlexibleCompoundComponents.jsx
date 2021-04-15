import React from 'react'
import { Switch } from '../utils/switch'
import flexibleCompoundComponents from '../markdowns/flexibleCompoundComponents.md'
import MarkdownRenderer from '../components/MarkdownRenderer'

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function Toggle({ onToggle, children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider
      value={{
        on,
        toggle,
        togglerProps: {
          'aria-pressed': on,
          onClick: toggle,
        },
      }}>
      {children}
    </ToggleContext.Provider>
  )
}

function useToggle() {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggle must be used within a <Toggle/>')
  }
  return context
}

function ToggleOn({ children }) {
  const { on } = useToggle()
  return on ? children : null
}
function ToggleOff({ children }) {
  const { on } = useToggle()
  return on ? null : children
}

function ToggleButton(props) {
  const { on, toggle } = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function CustomButton(props) {
  const { on, togglerProps } = useToggle()
  return (
    <button aria-label='custom-button' {...togglerProps}>
      {on ? 'on' : 'off'}
    </button>
  )
}

function FlexibleCompoundComponents() {
  return (
    <div>
      <div className='ml-8 mt-24'>
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is off</ToggleOff>
          <div>
            <ToggleButton />
          </div>
          <CustomButton />
        </Toggle>
      </div>
      <MarkdownRenderer markdown={flexibleCompoundComponents} />
    </div>
  )
}

export default FlexibleCompoundComponents
