import express from "express" ;
import dotenv from "dotenv";
import cors from 'cors' ;
import { AppDataSource } from "./migration/data-source";
import userRoute from "./routes/userRoute";
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
app.use(express.json());
app.use(express.urlencoded({extended : false }))
app.use(cors({ credentials : true}));

 
//routes 
app.use('/softhub/user', userRoute)
app.use(errorHandler)

app.listen( port , ()=> {
   console.log(`Listening to Idan on Port ${port}`)
});  