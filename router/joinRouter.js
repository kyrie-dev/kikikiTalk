import express from "express";
import routes from "../routes";
import { postJoin, getJoin } from "../controller/joinController";

const joinRouter = express.Router();

joinRouter.get(routes.join, getJoin);
joinRouter.post(routes.join, postJoin);

export default joinRouter;

