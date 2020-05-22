import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [inputValue, setInputValue] = useState()
  return (
    <div className="flex items-center justify-center h-screen">
      <input
        className="bg-white shadow-xs rounded px-4 pt-2 pb-2 mb-2 mt-2"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button
        className="bg-blue-500 shadow-base text-white rounded px-4 pt-2 pb-2 mb-2 ml-1 mt-2"
        type="button"
        onClick={() => {
          history.push(`/${inputValue}`)
        }}
      >
        {' '}
        Go{' '}
      </button>
    </div>
  )
}

Main.propTypes = {}

export default Main