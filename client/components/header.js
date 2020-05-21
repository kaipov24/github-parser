import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, repoName } = useParams()
  const button1 = (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <Link to={`/${userName}`}>Go to user</Link>
    </div>
  )
  const button2 = (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <Link to="/">Go to main</Link>
    </div>
  )
  if (typeof repoName !== 'undefined') {
    return (
      <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4">
          {userName}
        </div>
        {button1}
        {button2}
      </div>
    )
  }
  return (
    <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4">
        {userName}
      </div>
      {button2}
    </div>
  )
}

export default React.memo(Header)
