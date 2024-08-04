import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-b shadow-md w-full fixed top-0 bg-white z-50'>
      <header className='text-center py-4'>
        <Link to='/'>
          <h1 className='text-4xl font-bold text-blue-600 cursor-pointer'>CodeHelpBlogs</h1>
        </Link>
      </header>
    </div>
  )
}

export default Header