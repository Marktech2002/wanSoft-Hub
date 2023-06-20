import { Router , Request , Response} from "express" ;
import { loginUser , registerUser , getUser , UpdateUser , forgetPassword } from "../controllers/userController";

const router : Router = Router();
router.post('/register' , registerUser) // Register user
router.post('/login' , loginUser) // Login User
router.get('/me' , getUser)// Get user details
router.put('/updateCredentials' , UpdateUser)// Update user credentials
router.post('/forgotPassword' , forgetPassword)// forget password
export default router ;  