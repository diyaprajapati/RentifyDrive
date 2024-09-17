import React from 'react'

export default function Button( {children} ) {
  return (
    <div>
      <button className='border px-16 py-4 rounded-lg bg-green-700 text-white font-semibold border-none hover:bg-green-800 transition-all ease-in-out duration-200'>{children}</button>
    </div>
  )
}
