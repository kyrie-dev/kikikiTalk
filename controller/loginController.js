import routes from "../routes";
import User from "../models/user";
import passport from "passport";
import { home } from "./homeControlloer";


let loginFailed = {'login':'NO'};
let loginSuccess = {'login':'OK'};
let notpassword = {'login':'Incorrect password'};

export const getLogin = (req,res)=> res.render("login");

export const postLogin =  passport.authenticate('local', {
    failureRedirect: routes.loginFailed,
    successRedirect: routes.loginSuccess
}); 
    



export const successLogin = (req,res)=> {
    res.send(loginSuccess);
}
export const failedLogin = (req,res)=> {
    res.send(loginFailed);
    
}

