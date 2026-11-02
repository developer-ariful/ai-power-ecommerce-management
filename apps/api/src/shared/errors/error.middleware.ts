
import { ErrorRequestHandler } from "express";
import { AppError } from "./app-error.js";
export const errorMiddleware: ErrorRequestHandler =(error, req, res, next )=>{
    let statusCode =  error?.statusCode || error?.status || 500;
    let message = error.message || "Internal Server Error";

    if(error instanceof AppError){
        statusCode = error.statusCode;
        message = error.message;
    }else if(error instanceof SyntaxError && "body" in error){
        statusCode = 400;
        message = "Invalid JSON Request Body";
    }

    if(statusCode >= 500){
        console.error(error);
    }

    res.status(statusCode).json({
        success: false,
        message, 
        path: req.originalUrl,
        timeStamp: new Date().toISOString()
    })
}


