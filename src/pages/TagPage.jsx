import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');

    return (
      <div className='w-full flex flex-col items-center gap-y-6 py-2 mt-12 mb-12 bg-white shadow-lg rounded-lg p-6'>
          <Header className='w-full' />
          <div className='w-full max-w-4xl flex flex-col items-center mt-4'>
              <button
                  className= ' mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
                  onClick={() => navigation(-1)}
              >
                  BACK
              </button>
              <h2 className='text-3xl font-bold mt-4'>
                  Blogs Tagged <span className='text-blue-500'>{tag}</span>
              </h2>
          </div>
          <div className='w-full max-w-4xl flex flex-col items-center p-4'>
              <Blogs />
              <Pagination />
          </div>
      </div>
  )
}

export default TagPage