import React from 'react'
import { Route } from 'react-router-dom'

import RepositoryPage from './repository'
import UserPage from './userrepo'
import InputField from './input'

const Home = () => {
  return (
    <div>
      <Route exact path="/" component={() => <InputField />} />
      <Route exact path="/:userName" component={() => <UserPage />} />
      <Route exact path="/:userName/:repoName" component={() => <RepositoryPage />} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
