
import type { ErrorRequestHandler } from "express";
import { AppError } from "./app-error.js";
import type { ApiResponse } from "../types/api-response.types.js";
import { Prisma } from "../../generated/prisma/client.js"

export const errorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    let statusCode = error?.statusCode || error?.status || 500;
    let message = error.message || "Internal Server Error";

    // Prisma Error Handling
    if (error && typeof error === "object" && "code" in error) {
        if (error.code === "P2002") {
            statusCode = 409;
            message = "A record with this value already exists";
        } else if (error.code === "P2025") {
            statusCode = 404;
            message = "Requested record was not found"
        }
    } else if (error instanceof AppError) { // Custom Application Error
        statusCode = error.statusCode;
        message = error.message
    }else if (error instanceof SyntaxError && "body" in error){
        statusCode = 400;
        message = "Invalid JSON Request Body";
    }

    if(statusCode >= 500){
        console.error(error)
    }

    const response: ApiResponse<null> = {
        success: false,
        message,
        data: null
    };

    return res.status(statusCode).json(response)

}


