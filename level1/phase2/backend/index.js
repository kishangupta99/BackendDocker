import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    return res.status(200).json({
        message: "Hello from Dockerized Express App phase 2 On Docker Network"
    })
})

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server is running on port ${PORT}`);   
})



