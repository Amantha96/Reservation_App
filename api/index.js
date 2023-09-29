import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }
    catch (error) {
        throw error
    }
};



mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from MongoDB")
}) 

mongoose.connection.on("Connected",()=>{
    console.log("Connected from MongoDB")
})
app.get ("/",(req, res)=>{
    res.send("Hello World")
}
);

//middlewares

app.use(cookieParser())
app.use(express.json());

app.use("/auth",authRoute);  
app.use("/users",userRoute);  
app.use("/hotels",hotelRoute);  
app.use("/rooms",roomRoute);  


app.use((err,req, res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,

    });
   
});







app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})