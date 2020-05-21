import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    receiver:{
        type:String,
        required: true
    },
    chatContent:{
        type:String,
        required: true
    },
    chatTime:{
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model("Chat", chatSchema);
export default model;