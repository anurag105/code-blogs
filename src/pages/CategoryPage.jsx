import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'


const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll('-',' ');

    return (
      <div className='flex flex-col items-center w-11/12 max-w-[500px] mx-auto py-2 mt-24 mb-12'>
          <Header/>
          <div className='w-full flex flex-col items-center gap-y-4'>
              <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
                  onClick={() => navigation(-1)}
              >
                  BACK
              </button>
              <h2 className='text-2xl font-bold'>
                  Blogs on <span className='text-blue-500'>{category}</span>
              </h2>
          </div>
          <Blogs/>
          <Pagination/>
      </div>
  )
}

export default CategoryPage
