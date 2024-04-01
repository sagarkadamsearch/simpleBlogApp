import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:String,
    description:String,
},{
    versionKey:false,
    timestamps:true
});

const BlogModel =  mongoose.models.Blogs || mongoose.model('Blogs',BlogSchema);

export default BlogModel;