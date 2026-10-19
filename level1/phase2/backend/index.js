import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req,res) => {
    return res.status(200).json({
        message: "Hello from Dockerized Express App New Version"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);   
})




