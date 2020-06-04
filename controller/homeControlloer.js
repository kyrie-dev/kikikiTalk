import routes from "../routes";
import User from "../models/user";
import bodyParser from "body-parser";

export const home = (req,res) => {
    res.render('home');
}

export const listhome =  async (req,res) => {
    let user_email = req.param("user_email");
    // console.log(user_email);
    try{
        const user_name = await User.find({"user_email":user_email},{"_id":true,"user_name":true,"user_profile":true,"friends":true});
       
        console.log("찾은 아이디:"+user_name);
        res.send(user_name)
     
    }catch(error){
        console.log(error);
    }
   
}

export const userfriend = async (req,res) => {
    let user_email = req.param("user_email");

    try{
        const result = await User.find({"user_email":user_email},{"_id":false,"friends":true});
        const friends_id = JSON.parse({"user_email":"123"});
        console.log(friends_id);
        res.send(result);
    }catch(error){
        console.log(error);
    }
}

export const listuser = async(req,res) => {
    let user_email = req.param("user_email");
    
    try{
    const user_list = await User.find({user_email:{$ne:user_email}},{"user_email":true,"_id":true,"user_profile":true,"user_name":true});

    console.log("찾은 친구들:" + user_list);
    res.send(user_list);
    }catch(error){
        console.log(error);
    }
}

export const searchuser = async(req,res) => {
    let user_nick = req.param("user_nick");

    try{
        const result = await User.find({"user_name":user_nick},{"_id":true,"user_name":true,"user_profile":true});
        console.log(result);

        res.send(result);
    }catch(error){
        console.log(error);
    }
}

export const addfriend = async(req,res) => {
    let user_id = req.param("user_id");
    let user_nick = req.param("user_nick");
    console.log(user_nick);
    console.log(user_id);
    try{
        await User.updateOne({user_name:user_nick},{$addToSet:{friends:user_id}});
        res.send("성공")
    }catch(error){
        console.log(error);
    }
}