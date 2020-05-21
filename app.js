import express from "express";
import logger from "morgan";
import socketIO from "socket.io";
import "./db";
import dotenv from "dotenv";
import "./models/user";
import "./models/chat";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(logger("dev"));

const handleListening = () => console.log(`✅ server running on :https://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", socket => {
    socket.on("newMessage",({ message }) => {
        //하 너무 어렵다 감도 안잡힌다.. 
        // userSchema , chatSchema 
        // 
    });
})
