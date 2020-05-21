import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false
}
 );

const db = mongoose.connection;

const handleOpen = () => console.log("🟢Connected to DB");
const handleError = () => console.log(`❌ Error on DB Connection:${Error}`);

db.once("open", handleOpen);
db.on("error", handleError);