import passport from "passport";
import User from "./models/user";
import localStrategy from "passport-local";


passport.use(User.createStrategy()); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());