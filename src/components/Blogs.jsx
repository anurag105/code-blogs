import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    // step 3 - consume the data
    const {posts , loading}=useContext(AppContext);

   


  return (
    <div className='w-11/12 max-w-[500px] flex flex-col gap-y-6 py-2 mt-12 mb-12 bg-white shadow-lg rounded-lg p-4'>
      { 
            loading ? (<Spinner/>) : 
            
                (
                posts.length===0 ?
                 (
                    <div className='text-center text-gray-500'>
                        <p>No posts found</p>
                    </div>
                 ) :

                (posts.map((post)=>( 
                     <BlogDetails key={post.id} post={post} className='border-b border-gray-200 pb-4 mb-4'/>
                )))
      )}
    </div>
  )
}

export default Blogs