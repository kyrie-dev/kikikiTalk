import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userID:{
        type: String,
        unique: true,
        required: "UserID is required"
    },
    password:{
        type:String,
        required: "Password is required",

    },
    userNick:{
        type: String,
        unique:true,
        required: "NickName is required"
    },
    joinDate:{
        type:Date,
        default: Date.now
    }
    
});
const model = mongoose.model("User", userSchema);
export default model;