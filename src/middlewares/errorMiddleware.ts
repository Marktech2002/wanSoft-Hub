import { Request , Response , NextFunction } from "express";
interface ErrorResponse {
    message : string ,
    stack?: string | null
}

 const errorHandler = (err : Error , req : Request , res : Response , next : NextFunction) : void => {
   const statusCode : number = res.statusCode ? res.statusCode : 500 ;

   const errorResponse : ErrorResponse = {
      message: err.message, 
      stack : process.env.NODE_ENV === 'production' ? null : err.stack,
   };
   res.status(statusCode);
   res.json(errorResponse);
}

export { errorHandler}