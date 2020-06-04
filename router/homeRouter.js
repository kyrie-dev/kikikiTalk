import express from "express";
import routes from "../routes";
import { home, listhome, listuser, searchuser, addfriend, userfriend,  } from "../controller/homeControlloer";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.listhome, listhome);
homeRouter.get(routes.listuser, listuser);
homeRouter.get(routes.searchuser, searchuser);
homeRouter.get(routes.addfriend,addfriend);
homeRouter.get(routes.userfriends,userfriend);

export default homeRouter;