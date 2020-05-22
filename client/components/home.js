import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import RepoName from './reponame'
import UserName from './username'
import Main from './main'

const Home = () => {
  const { userName, repoName } = useParams()
  const [repo, setRepo] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios(`https://api.github.com/users/${userName}/repos`).then((it) => {
        const namesArr = it.data.map((elem) => elem.name)
        setRepo(namesArr)
      })
    }
  }, [userName])

  useEffect(() => {
    if (typeof userName !== 'undefined' && typeof repoName !== 'undefined') {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios
        .get(`https://api.github.com/repos/${userName}/${repoName}/readme`, {
          param: {},
          headers
        })
        .then((it) => setText(it.data))
    }
    return () => {}
  }, [userName, repoName])

  return (
    <div>
      <Header />
      <div className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route
            exact
            path="/:userName"
            component={() => <UserName repo={repo} username={userName} />}
          />
          <Route exact path="/:userName/:repoName" component={() => <RepoName text={text} />} />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
