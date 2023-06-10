import express from "express" ;
import dotenv from "dotenv";
import cors from 'cors' ;
import mongoose from "mongoose";

dotenv.config()
const app = express();

const port : string | undefined  = process.env.PORT ;
//middlewares
app.use(cors({ credentials : true}))

app.listen( port , ()=> {
   console.log(`Listening to Idan on Port ${port}`)
}) 