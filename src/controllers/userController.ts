import { Response , Request, application } from "express";
import { AppDataSource } from "../migrations/data-source"
import { User } from "../models/userEntity";

//@desc register new user  
//@route POST /user/sign-up  
//@access Public
export const registerUser = async (req: Request , res: Response) => {
    const { firstName , secondName , email , password  } = req.body;
    if ( !firstName || !secondName || !email || !password ) {
       return res.status(400).json({
            msg : "Invalid Credentials",
            status : "Invalid"
        })
    }
    const userExists = await AppDataSource.getRepository(User).findOne({ where : { email }}) ;
    if(userExists) {
        return res.status(400).json({
            msg : "User already Exists",
            status : "Invalid" ,
        })
    }
   try {
     const newUser = AppDataSource.getRepository(User).create(req.body) ;
     const savedUser = await AppDataSource.getRepository(User).save(newUser) ;
     res.status(200).json(savedUser);
   } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(400).json({ error: 'User registration failed' });
   }
}
//@desc     Authenticate a new user  
//@route POST /user/login 
//@access Public
export const loginUser = async (req: Request , res: Response) => {
    
}
//@desc Get a user  
//@route GET /user/me
//@access Private
export const getUser = async (req: Request , res: Response) => {
    res.status(200).json("Hello worlf=d")
}

//@desc Update a user credential 
//@route PUT /user/:id
//@access Private
 export const UpdateUser = async (req: Request , res: Response) => {
    
}

//@desc register new user  
//@route POST /user/forget-password
//@access Public
export const forgetPassword = async (req: Request , res: Response) => {
    
}

// export default { registerUser , loginUser , getUser , UpdateUser , forgetPassword}