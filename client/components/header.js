import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link to="/">Go back</Link>
      <div>{userName}</div>
    </div>
  )
}

export default React.memo(Header)
