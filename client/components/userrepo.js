import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './header'

const UserPage = () => {
  const [userRepos, setUserRepos] = useState([])
  const { userName } = useParams()
  const url = `https://api.github.com/users/${userName}/repos`
  useEffect(() => {
    axios.get(url).then((it) => {
      setUserRepos(it.data)
    })
    return () => {}
  }, [url])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {userRepos.map((userRepo) => {
            return (
              <div>
                <Link to={`/${userName}/${userRepo.name}`}>{userRepo.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

UserPage.propTypes = {}

export default React.memo(UserPage)
