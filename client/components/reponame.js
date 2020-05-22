import React from 'react'
import Markdown from 'markdown-to-jsx'

const RepoName = (props) => {
  return (
    <div>
      <Markdown id="decription">{props.text}</Markdown>
    </div>
  )
}

RepoName.propTypes = {}

export default RepoName
