import React from 'react'

export default function Button({ children, onSubmit }) {
  return (
    <button onClick={onSubmit} className='border px-24 py-4 rounded-lg bg-green-700 text-white font-semibold border-none hover:bg-green-800 transition-all ease-in-out duration-200'>{children}</button>
  )
}
