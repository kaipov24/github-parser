import React, { useState } from 'react'
import { history } from '../redux'
import Header from './header'
import Head from './head'

const InputField = (props) => {
  const [userName, setuserName] = useState('')
  const onChange = (e) => {
    const newUserName = e.target.value
    setuserName(newUserName)
    props.onChange(newUserName)
  }
  return (
    <div>
      <Header />
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          <input type="text" value={userName} onChange={onChange} />
          <button
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
