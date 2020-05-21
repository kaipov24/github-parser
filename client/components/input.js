import React, { useState } from 'react'
import { history } from '../redux'

const InputField = (props) => {
  const [userName, setuserName] = useState('')
  const onChange = (e) => {
    const newUserName = e.target.value
    setuserName(newUserName)
    props.onChange(newUserName)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <input type="text" value={userName} onChange={onChange} />
          </div>
          <button
            className="flex items-center justify-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={() => {
              history.push(`/${userName}`)
            }}
          >
            {' '}
            Go{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

InputField.propTypes = {}

export default InputField
