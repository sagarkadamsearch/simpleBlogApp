import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   name:String,
   surname:String,
   password:String,
   email:String
},{
    versionKey:false,
    timestamps:true
});

const UserModel =  mongoose.models.Users || mongoose.model('Users',UserSchema);

export default UserModel;