import { useEffect, useState } from "react"
import { BlogCard } from "../components/BlogCard";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import FormDialog from "../components/CreatePost";

export const Blogs = () => {
    const [blogs, setBlogs] = useState([{
        title : "",
        content : ""
    }]);
    const url = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const jwt: any = localStorage.getItem('token');
        fetch(`${url}/api/v1/blog/bulk`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            }
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                const json = await res.json();
                setBlogs(json);
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    return (<>
           <Header />
           <div className=" bg-black opacity-80">
         <div className="ml-40 mr-40 flex justify-around  border-t border-solid border-white border-opacity-50 items-center">
            <div>
               <NavLink className="pr-10 text-lg font-semibold text-white" to='/blogs'>Article</NavLink>
               <NavLink className="pl-10 text-lg font-semibold text-white"to='/ask'>Asked Doubt</NavLink>
            </div>
            <div>
                <FormDialog />
            </div>
         </div>
         </div>
        <div className="flex flex-col items-center">
            {/* {blogs.map((blog: any, index) => <BlogCard
                key={index}
                authorName={"Ankit K"}
                title={"blog.title"}
                content={blog.content}
                publishedDate={"9th Mar 2024"}
            />)} */}
            {blogs.length > 0 && blogs.map((el,i)=>{
               return <BlogCard  key={i}
            authorName={""}
            title={el.title} 
            content={el.content} 
            publishedDate={""}/>})
            }
        </div>
        </>
    )
}
