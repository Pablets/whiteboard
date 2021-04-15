import * as React from 'react'

const noop = () => {}

class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      'w-10',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <label
        className='max-w-min p-0 m-0 h-20 flex justify-center items-center rounded-full overflow-hidden'
        aria-label={ariaLabel || 'Toggle'}
        >
        <input
          className='toggle-input'
          type='checkbox'
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid='toggle-input'
        />
        <span className={`${btnClassName}`} {...props} />
      </label>
    )
  }
}

export { Switch }
