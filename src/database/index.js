import mongoose from "mongoose";

const connectToDB = async()=>{
   mongoose.connect('mongodb+srv://sagar:Sagar%40123@cluster0.kqwxg1s.mongodb.net/simple-blog-app-next-js?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Data base connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connectToDB;