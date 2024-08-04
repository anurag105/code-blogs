import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
import { Routes, Route } from 'react-router-dom'
import { useSearchParams,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'

const App = () => {

//agar url me se kisi   search parameter ko access ya update karna hai to
//we use useSearchParams hook and useLocation hook (current location ko acces kar skte hai)
  const {fetchBlogPosts} = useContext(AppContext);

const [searchParams,setSearchParams] = useSearchParams();
const location = useLocation();



  useEffect(()=>{

    const page=searchParams.get('page') ?? 1;
    
    //calling on basis of tag
    if(location.pathname.includes('tags')){
      //matlab tag wala page show karna hai
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page),tag);
    }

    //calling on basis of category
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page),null,category);
      //tag nahi hai to null pass hai tag ke liye
    }

    //calling on basis of page 
    else{
      fetchBlogPosts(Number(page));
    }

    //hame ye chalana hai jab bhi pathname change ho 
    //matlab ki jab bhi location.pathname ya location.search change ho tab ye chalega
  },[location.pathname , location.search])      


  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/blog/:blogId' element = {<BlogPage/>}/>
      {/* blog/:blogId la matlab blogs ke baad kuch bhi hoga address me vo blogId hoga */}
      <Route path='/tags/:tag' element = {<TagPage/>}/>
      <Route path='/categories/:category' element = {<CategoryPage/>}/>
      

    </Routes>
    // <div className='w-full h-full flex flex-col justify-center items-center'>
    // <Header/>
    // <Blogs/>
    // <Pagination/>
    // </div>
  )
}

export default App
