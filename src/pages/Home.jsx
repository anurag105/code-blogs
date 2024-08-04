import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center justify-center mt-24'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home