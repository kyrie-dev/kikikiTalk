import routes from "../routes";
import User from "../models/user";

export const getJoin = (req,res)=> res.render("join");

export const postJoin = async(req,res,next)=>{
    let values = "";
    const {
        body: { user_name,user_email,password,password2 }
    } = req;
    console.log(user_name);
    console.log(user_email);
    if(password !== password2){
        values = {'join_ok':'password'};
        res.send(values);
    }else {
        try{
            const user = await User({
                user_name,
                user_email
            });
            await User.register(user, password);
            values = {'join_ok':'OK'};
            next();
        }catch (error){
            console.log(error);
            values = {'join_ok':'NO'};
            // res.redirect(routes.home);
        }
        res.send(values);
    }
};