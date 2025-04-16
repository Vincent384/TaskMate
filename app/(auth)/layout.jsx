import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-700'>{ children }</div>
  )
}

export default AuthLayout