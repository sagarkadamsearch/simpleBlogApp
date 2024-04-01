'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"
import './add-blog.css';

const initialFormData = {
    'title': "",
    'description':""
}

export default function AddBlog(){

    const router = useRouter();

    const [blogFormData, setBlogFormData] = useState(initialFormData);
   

    const handleAddBlog = async ()=>{
        const response = await fetch('/api/blog/add-new-blogs',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(blogFormData)
        });

        const result = await response.json();

        // if(result?.success){
        //     setBlogFormData(initialFormData);
        //     router.push('/blog-list')
        // }
    }

    return (
        <div className="add-blog">
            <h1 className="add-blog-title">Add new blog</h1>
            <div className=" add-blog-div">
                <div className="add-blog-div">
                    <label>Enter blog title</label>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Enter blog title"
                    value={blogFormData['title']}
                    onChange={(e)=> setBlogFormData({
                        ...blogFormData,
                        title:e.target.value
                    })}
                    />
                </div>
                <div className="add-blog-div">
                    <label>Enter blog description</label>
                    <textarea 
                    rows={10}
                    name="description" 
                    placeholder="Enter blog description"
                    value={blogFormData['description']}
                    onChange={(e)=> setBlogFormData({
                        ...blogFormData,
                        description:e.target.value
                    })}
                    />
                </div>
                <div>
                    <button onClick={handleAddBlog} className="border border-red-500 p-4 bg-black text-white">Add Blog</button>
                </div>
            </div>
        </div>
    )
} 