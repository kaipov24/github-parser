import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { repoName, userName } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div id="repository-name">{repoName || userName}</div>
        {userName && (
          <div>
            <Link to="/" id="go-back">Go to main</Link>
          </div>
        )}
      </div>
      {repoName && (
        <div>
          <Link to={`/${userName}`} id="go-repository-list">List of repos</Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
