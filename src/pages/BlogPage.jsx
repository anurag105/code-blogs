import { useNavigate, useLocation } from 'react-router';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';
import { useContext, useState, useEffect } from 'react';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {

    const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1);

    // calling blogs on basis of blogId (specific id wala blog)
    // heading pe click krenge to page khulega blog ka
    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log('Fetched data:', data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log('error in fetching data');
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
        // jab bhi current location me change hoga tab ye chalega
    }, [location.pathname]);

    return (
        <div className='w-full flex flex-col items-center gap-y-6 py-2 mt-12 mb-12 bg-white shadow-lg rounded-lg p-6'>
            <Header className='w-full' />
            <div className='w-full flex flex-col items-center mt-4'>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-3'
                    onClick={() => navigation(-1)}
                >
                    BACK
                </button>
            </div>
            {
                // This is to check if the data is still loading or not
                loading ? (
                    <div className='flex flex-col items-center justify-center h-[80vh]'>
                        <p className='text-lg font-semibold'>Loading...</p>
                    </div>
                ) : blog ? (
                    <div className='w-full max-w-4xl flex flex-col items-center p-4'>
                        <BlogDetails post={blog} />
                        <hr className='w-full my-8  border-gray-300' />
                        <h2 className='text-2xl font-bold mt-8 mb-4'>Related Blogs</h2>
                        <div className='w-full flex flex-col items-center gap-y-6'>
                            {relatedBlogs.map((post) => (
                                <BlogDetails key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center h-[80vh]'>
                        <p className='text-lg font-semibold'>No blog found</p>
                    </div>
                )
            }
        </div>
        );
    }

export default BlogPage;