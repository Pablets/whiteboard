import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

// const components  = {
//   code: ({ language, value }) => {
//     return (
//       <SyntaxHighlighter
//         className='rounded-xl overflow-hidden focus:outline-none'
//         contentEditable='true'
//         style={tomorrow}
//         language={language}
//         children={value}
//       />
//     )
//   },
// }

const components = {
  code({ node, className, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        contentEditable='true'
        PreTag='div'
        style={dark}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
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
        components={components}
        className='ml-8 w-3/4 bg-transparent select-all focus:outline-none rounded-xl overflow-hidden'>
        {codeBlock}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
