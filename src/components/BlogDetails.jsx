import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    //route ko kisi text se link krte hai link ya navlink se
    return (
        <div className='w-11/12 max-w-[500px] flex flex-col items-center gap-y-6 py-2 mt-12 mb-12 bg-white shadow-lg rounded-lg p-6'>
            <NavLink to={`/blog/${post.id}`} className='text-2xl font-bold text-blue-600 hover:underline'>
                <span>{post.title}</span>
            </NavLink>

            <p className='text-gray-700'>
                By <span className='font-semibold'>{post.author}</span> on {' '}
                <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`} className='text-blue-600 hover:underline'>
                    <span>{post.category}</span>
                </NavLink>
            </p>

            <p className='text-gray-500'>Posted On {post.date}</p>

            <p className='text-gray-800 leading-relaxed'>{post.content}</p>

            <div className='flex flex-wrap gap-2 mt-4'>
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`} className='text-blue-600 hover:underline'>
                        <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default BlogDetails