const { default: connectToDB } = require("@/database");
const  {default:UserModel} = require('../../../../models/user.model');

const { NextResponse } = require("next/server");

export async function POST(req){
    try {
        await connectToDB();
        const data = await req.json();
        console.log(data);
        const newlyCratedUser = await UserModel.create(data); 
        

        return NextResponse.json({
            success:true,
            message: 'User added successfully!'
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'Somthing went wrong!',
            error:error
        })
    }
}