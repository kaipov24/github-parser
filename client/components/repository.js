import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
import Header from './header'

const RepositoryPage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {}
        </div>
      </div>
    </div>
  )
}

RepositoryPage.propTypes = {}

export default React.memo(RepositoryPage)
