import express from "express";
import {join} from "path";
import logger from "morgan";
import socketIO from "socket.io";
import bodyparser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import localPassport from "passport-local";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import "./db";
import dotenv from "dotenv";
import "./models/user";
import "./models/chat";
import joinRouter from "./router/joinRouter";
import homeRouter from "./router/homeRouter";
import routes from "./routes";

import "./passport";
import loginRouter from "./router/loginRouter";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// const CookieStore = MongoStore(ssession);


app.set('view engine', "pug")
app.set("views", join(__dirname,"views"));
app.use(express.static(join(__dirname,"static")));
app.use(bodyparser.json());
app.use(logger("dev"));
app.use(bodyparser.urlencoded({ extended: true}));

// app.use(
//     session({
//         store: new CookieStore({mongooseConnection: mongoose.connection })
//     })
// )

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);


app.use(routes.home,homeRouter);
app.use(routes.home,loginRouter);
app.use(routes.join,joinRouter);





const handleListening = () => console.log(`✅ server running on :https://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", function(socket) {
    console.log("connected");
    socket.on("newMessage",({ message }) => {
        socket.broadcast.emit("messageNotif", ({message}));
        console.log(message);
    });
});

export default app;