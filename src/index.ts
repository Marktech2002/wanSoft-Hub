import express from "express" ;
import dotenv from "dotenv";
import cors from 'cors' ;
import { AppDataSource } from "../src/migrations/data-source";
import { errorHandler  }  from '../src/middlewares/errorMiddleware';

dotenv.config(); 
const app = express();

//db connection
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const port : string | undefined  = process.env.PORT ;
//middlewares
app.use(errorHandler)
app.use(express.urlencoded({extended : false }))
app.use(cors({ credentials : true}));

app.listen( port , ()=> {
   console.log(`Listening to Idan on Port ${port}`)
}); 