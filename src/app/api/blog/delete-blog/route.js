import connectToDB from "@/database";
import BlogModel from "@/models/blog.model";
import { NextResponse } from "next/server";



export async function DELETE(req){

    try {
        await connectToDB();
        const {searchParams} = new URL(req.url);
        const currentBlogId =  searchParams.get('id');

        if(!currentBlogId){
            return NextResponse.json({
                success:false,
                message:"Id required!"
            })
        }

        const deletedItem = await BlogModel.findByIdAndDelete(currentBlogId);

        return NextResponse.json({
            success:true,
            message:"Blog Item is deleted!"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:"Somthing went wrong!"
        })
    }
}