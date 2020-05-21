import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import Markdown from 'markdown-to-jsx'
import Header from './header'

const RepositoryPage = () => {
  const { userName, repoName } = useParams()
  const [file, setFile] = useState([])
  const URL = `https://api.github.com/repos/${userName}/${repoName}/readme`
  const headers = { Accept: 'application/vnd.github.v3.raw' }
  useEffect(() => {
    axios.get(URL, { param: {}, headers }).then((it) => {
      setFile(it.data)
    }, [URL])
  })
  return (
    <div>
      <Header />
      <div className="px-6 py-4">
        <div>{file}</div>
      </div>
    </div>
  )
}

RepositoryPage.propTypes = {}

export default React.memo(RepositoryPage)
