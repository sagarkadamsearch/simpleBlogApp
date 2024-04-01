import BlogListComponent from "@/components/blog/list";
import './page.css'

async function fetchAllBlogs(){

    try {
        const  response = await fetch('/api/blog/get-all-blogs',{
            cache:'no-store'
        })
    
        const result = await response.json();
    
        if(result?.success){
            return result.data;
        }
        else{
            return [];
        }
    } catch (error) {
        console.log(error);
    } 
}




export default async function BlogList(){

    const getAllBlogs = await fetchAllBlogs();
    
    return (
        <div className="blog-list">
            <h1 className="blog-list-title">Blog List</h1>
            <BlogListComponent getAllBlogs={getAllBlogs}/>
        </div>
    )
}