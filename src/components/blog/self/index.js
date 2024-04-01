'use client'

import { useRouter } from "next/navigation";
import { useEffect, useReducer } from "react";
import './index.css'


export default function BlogListComponent({getAllBlogs}){

    const data = getAllBlogs;
    const handleDeleteBlog = async (blogId)=>{
          const response  = await fetch(`/api/blog/delete-blog?id=${blogId}`,{
            method:"DELETE"
          });
          const data = await response.json();

    }

    const router = useRouter();

    useEffect(()=>{
     
    },[])
        
    return <div className="blog-list-component">
        {getAllBlogs?.length>0 
        ?
        getAllBlogs.map((e,index)=>
        <div key={index} className="blog-div">
            <p>Title: {e.title}</p>
            <p>Description: {e.description}</p>
            <button onClick={()=>handleDeleteBlog(e._id)} className="blog-div-btn">Delete</button>
            <button onClick={()=> router.push(`blog-list/${e._id}`)} className="blog-div-btn">View</button>
        </div>)
        :
        <h1>No blogs available</h1>
        }
    </div>
}