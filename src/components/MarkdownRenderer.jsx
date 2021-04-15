import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        className='rounded-xl overflow-hidden focus:outline-none'
        contenteditable='true'
        style={tomorrow}
        language={language}
        children={value}
      />
    )
  },
}

const MarkdownRenderer = ({ markdown }) => {
  const [codeBlock, setCodeBlock] = React.useState('')

  React.useLayoutEffect(() => {
    fetch(markdown)
      .then(res => res.text())
      .then(data => setCodeBlock(data))
  })

  return (
    <div className='outline-none focus:outline-none'>
      <ReactMarkdown
        renderers={renderers}
        className='ml-8 w-3/4 bg-transparent select-all focus:outline-none rounded-xl overflow-hidden'>
        {codeBlock}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
