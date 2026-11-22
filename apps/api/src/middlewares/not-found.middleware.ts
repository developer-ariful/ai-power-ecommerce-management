import { RequestHandler, Request, Response, NextFunction } from "express";
import { AppError } from "../shared/errors/app-error.js";

export const notFoundMiddleware: RequestHandler= (
    req: Request, res: Response, next: NextFunction
)=>{
    next(
        new AppError(
            `API endpoint no found: ${req.method} ${req.originalUrl}`,404
        )
    )
}