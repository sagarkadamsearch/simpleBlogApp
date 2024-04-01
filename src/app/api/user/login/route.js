const { default: connectToDB } = require("@/database");
const  {default:UserModel} = require('../../../../models/user.model');

const { NextResponse } = require("next/server");

export async function POST(req){
    try {
        await connectToDB();
        const data = await req.json();
        const {email,password} = data;
        const user = await UserModel.findOne({email}); 
        
        if(!user){
            return NextResponse.json({
               success:false,
               message: 'User not found!'
            })
      } 
      
      if(password==user.password){
           return NextResponse.json({
           success:true,
           message: 'Login Success!'
           })
        }
       else{
        return NextResponse.json({
            success:false,
            message: 'Wrong Creditionals!'
            })
       } 

    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'Somthing went wrong!',
            error:error
        })
    }
}