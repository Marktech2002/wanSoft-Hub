import { Response, Request, application, urlencoded } from "express";
import { AppDataSource } from "../migration/data-source"
import { User } from "../models/userEntity";


/**
 * Register new user
 * @desc register new user  
   @route POST /user/sign-up  
   @access Public
 * @param req 
 * @param res 
 * @returns Response
 */
export const registerUser = async (req: Request, res: Response) => {
    const { firstName, secondName, email, password } = req.body;
    if (!firstName || !secondName || !email || !password) {
        return res.status(400).json({
            msg: "Invalid Credentials",
            status: "Invalid",
        })
    }

    const userExists = await AppDataSource.getRepository(User).findOneBy({ email });
    if (userExists) {
        return res.status(400).json({
            msg: "User already Exists",
            status: "Invalid",
        })
    }
    try {
        const newUser = AppDataSource.getRepository(User).create({ firstName, secondName, email, password });
        const savedUser = await AppDataSource.getRepository(User).save(newUser);
        console.log(savedUser)
        res.status(200).json(savedUser);
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(400).json({ error: 'User registration failed' });
    }
}

/**
 * login User 
 * @desc     Authenticate a new user  
 * @route POST /user/login 
 * @access Public
 * @param req 
 * @param res 
 * @returns Response
 */

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Omisssion of credentials",
            status: "Invalid"
        })
    }
    const user = await AppDataSource.getRepository(User).findOneBy({
        email
    })
    
    res.status(200).json(user)
    if(!user) {
        console.log('error')
        res.status(400).json("Error")
    }
 } 

    // console.log( email)
   
/**
 * Get user
 * @desc Get a user     
 * @route GET /user/me
 * @access Private 
 * @param req 
 * @param res 
 * @returns Response 
 */

export const getUser = async (req: Request, res: Response) => {
    res.status(200).json("Hello world")
}

/**
 * Update a user credentials
 * @desc Update a user credential 
 * @route PUT /user/:id
 * @access Private
 * @param req 
 * @param res 
 * @returns Response 
 */

export const UpdateUser = async (req: Request, res: Response) => {

}
/**
 * @desc register new user  
 * @route POST /user/forget-password
 * @access Public
 * @param req 
 * @param res 
 * @returns Response 
 */

export const forgetPassword = async (req: Request, res: Response) => {

}
