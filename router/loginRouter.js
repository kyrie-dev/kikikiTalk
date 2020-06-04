import express from "express";
import routes from "../routes";
import { getLogin, postLogin, successLogin, failedLogin } from "../controller/loginController";

const loginRouter = express.Router();

loginRouter.get(routes.loginSuccess,successLogin);
loginRouter.get(routes.loginFailed,failedLogin);
loginRouter.post(routes.loginSuccess,successLogin);
loginRouter.post(routes.loginFailed,failedLogin);
loginRouter.get(routes.login,getLogin);
loginRouter.post(routes.login,postLogin);


export default loginRouter;

