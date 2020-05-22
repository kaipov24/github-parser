import React from 'react'
import { Link } from 'react-router-dom'

const UserName = (props) => {
  const { username, repo } = props

  return (
    <div>
      {repo.map((repos) => {
        return (
          <div>
            <Link to={`/${username}/${repos}`}>{repos}</Link>
          </div>
        )
      })}
    </div>
  )
}

UserName.propTypes = {}

export default UserName