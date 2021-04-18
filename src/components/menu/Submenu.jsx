import React from 'react'

const Submenu = React.forwardRef(function Submenu(
  { children },
  ref
) {
  const childRef = React.useRef()

  React.useLayoutEffect(() => {
    divWidth()
    divHeight()
  }, [])

  function divWidth() {
    return childRef.current.clientWidth
  }

  function divHeight() {
    return childRef.current.clientHeight
  }

  React.useImperativeHandle(ref, () => ({
    divWidth,
    divHeight,
  }))

  return (
    <div>
      <div
        ref={childRef}
        className='py-6 box-content text-gray-300 flex flex-col font-bold'>
        {children}
      </div>
    </div>
  )
})

export default Submenu
