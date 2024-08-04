import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";
//step 1 context creation
export const AppContext = createContext();


//  children ka matlab ki jo component <AppContextProvider> ke andar honge woh sabko access milega value ke through
//yaha pe App.jschildren hai jo ki index.js me AppContextProvider ke andar hai

// step-2 creating a context provider
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling 
    async function fetchBlogPosts(page = 1,tag=null ,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url+= `&tag=${tag}`;
        }
        if(category){
            url+= `&category=${category}`;
        }
        // let url=`${baseUrl}?page=${page}`; correct
          // NOTE: - NEVER EVER HAVE ANY EXTRA SPACES OR CHARACTER INSIDE OR URL WILL BE CHANGED AND YOU WILL GET A 404 ERROR
          //e.g - let url=`${baseUrl}  ? page=${page}`; (this will give you a 404 error)
        console.log('printing the data');
        console.log(url);
        try{
            const result = await fetch(url);
            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }
            const data = await result.json();
            console.log('Fetched data:', data);
            if (data && data.posts) {
                setPage(data.page);
                setPosts(data.posts);
                setTotalPages(data.totalPages);
            } else {
                console.log('Invalid data structure:', data);
                setPage(1);
                setPosts([]);
                setTotalPages(null);
            }
        }
        catch(error){
            console.log('error in fetching data');
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const handlePageChange = (page) =>{  
        navigate({search : `?page=${page}`});
        setPage(page);
        fetchBlogPosts(page);

    };
    
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    //step 2 context providing 
    return <AppContext.Provider value={value}>
        {children}

        {/* iska matlab hai ki children jo ki app hai, usko value  provide kardo jo ki yaha value object hai */}
    </AppContext.Provider>
}
