const { default: connectToDB } = require("@/database");
const { default: BlogModel } = require("@/models/blog.model");
const { NextResponse } = require("next/server");



export async function POST(req){
    try {
        await connectToDB();
        console.log("connectd")
        const data = await req.json();

        const newlyCreatedBlogData = await BlogModel.create(data);

        if(newlyCreatedBlogData){
            return NextResponse.json({
                success:true,
                message: 'Blog added successfully!'
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:'Failed to add new blog to database! Please try again'
            })
        }

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success:false,
            message:'Somthing went wrong!'
        })
    }
}