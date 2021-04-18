import React from 'react'
import LeftMenuButton from './LeftMenuButton'
import MenuLink from './MenuLink'
import RightMenuButton from './RightMenuButton'
import Submenu from './Submenu'
import { motion } from 'framer-motion'

const FlexContainer = ({ children }) => {
  const [state, setState] = React.useState(true)

  const div1Ref = React.useRef()
  const div2Ref = React.useRef()

  const div1heigth = () => div1Ref.current.divHeight()
  const div1width = () => div1Ref.current.divWidth()
  const div2heigth = () => div2Ref.current.divHeight()

  const [menuHeight, setMenuHeight] = React.useState(null)
  const [menuWidth, setMenuWidth] = React.useState(null)

  React.useLayoutEffect(() => {
    setMenuWidth(div1width)
    if (state) {
      setMenuHeight(div1heigth)
    } else {
      setMenuHeight(div2heigth)
    }
  }, [state])

  const handleClick = e => {
    if (state) {
      setState(!state)
      setMenuHeight(div1Ref.current.clientHeight)
    } else {
      setState(!state)
      setMenuHeight(div2Ref.current.clientHeight)
    }
  }

  return (
    <motion.div
      style={{
        height: `${menuHeight}px`,
        width: `${menuWidth}px`,
        translateX: state ? `${menuWidth}px` : '0px',
      }}
      className={`transition-all duration-500`}>
      <div
        style={{ left: `-${menuWidth}px` }}
        className='flex justify-between relative'>
        <Submenu ref={div1Ref} handleClick={handleClick}>
          <LeftMenuButton handleClick={handleClick} />
          <MenuLink to={'/'} label={'Home'} />
          <MenuLink to={'/autocomplete'} label={'Autocomplete'} />
          <MenuLink to={'/counter'} label={'Counter'} />
          <MenuLink to={'/usereducer'} label={'useReducer'} />
          <MenuLink to={'/mdxpage'} label={'MDX example'}/>
        </Submenu>
        <Submenu ref={div2Ref} handleClick={handleClick}>
          <RightMenuButton handleClick={handleClick} />
          <MenuLink to={'/flexiblecompoundcomponents'} label={'Compound'} />
          <MenuLink to={'/statemanagement'} label={'State management'} />
          <MenuLink to={'/'} label={'item'} />
          <MenuLink to={'/'} label={'item'} />
          <MenuLink to={'/'} label={'item'} />
          <MenuLink to={'/'} label={'item'} />
          <MenuLink to={'/'} label={'item'} />
        </Submenu>
      </div>
    </motion.div>
  )
}

export default FlexContainer
