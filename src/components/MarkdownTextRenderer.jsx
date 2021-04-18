import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownTextRenderer = ({ markdown }) => {
  const [textBlock, setTextBlock] = React.useState('')

  React.useLayoutEffect(() => {
    fetch(markdown)
      .then(res => res.text())
      .then(data => setTextBlock(data))
  })

  return (
    <div className='outline-none focus:outline-none'>
      <ReactMarkdown
        className='ml-8 w-3/4 bg-transparent select-all focus:outline-none rounded-xl overflow-hidden'>
        {textBlock}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownTextRenderer
