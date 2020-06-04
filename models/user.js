import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    user_name : String,
    user_email : String,
    user_profile : {
        type:String,
        default:null
    },
    avatarUrl : String,
    facebookId : Number,
    githubId : Number,
    kakaoTalkId : Number,
    friends: [
        {
            type : String,
            ref : "User"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "user_email" });

const model = mongoose.model("User", UserSchema);


export default model;