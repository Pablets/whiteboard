import React from 'react'
import { Switch } from '../utils/switch'
import ReactMarkdown from 'react-markdown'
import flexibleCompoundComponents from '../markdowns/flexibleCompoundComponents.md'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        className='rounded-md'
        contenteditable='true'
        style={tomorrow}
        language={language}
        showLineNumbers
        children={value}
      />
    )
  },
}

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
  const [md, setMd] = React.useState('')

  React.useLayoutEffect(() => {
    fetch(flexibleCompoundComponents)
      .then(res => res.text())
      .then(data => setMd(data))
  })

  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
        <CustomButton />
      </Toggle>
      <ReactMarkdown
        contenteditable='true'
        renderers={renderers}
        className='ml-8 w-3/4 bg-transparent select-all'>
        {md}
      </ReactMarkdown>
    </div>
  )
}

export default FlexibleCompoundComponents
