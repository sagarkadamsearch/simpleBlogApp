import connectToDB from "@/database";
import BlogModel from "@/models/blog.model";
import { NextResponse } from "next/server";



export async function GET(){

    try {
        await connectToDB();
        console.log('Hello');
        const extractAllBlogs = await   BlogModel.find({});

    
            return NextResponse.json({
                success:true,
                data:extractAllBlogs
            })
    
     
    } catch (error) {
        console.log(Error);
        return NextResponse.json({
            success:false,
            message:"Somthing went wrong!"
        })
    }
}