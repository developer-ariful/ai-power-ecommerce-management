import express, { NextFunction, type ErrorRequestHandler, type Express, type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorMiddleware } from "./shared/errors/error.middleware.js";
import { AppError } from './shared/errors/app-error.js';
const app: Express = express();



app.use(helmet());
app.use(cors());
app.use(express.json())

app.get("/api/v1/test-error", (_req: Request, _res: Response, next: NextFunction)=>{
    // Simulate an error for testing purposes
    next(new AppError("Not found Error", 404));
});


app.get("/api/v1/health", (_req: Request, res:Response)=>{
    res.status(200).json({
        success: true,
        message: "AI E-Commerce API is running",
        timeStamp: new Date().toISOString()
    })
})

// Centralize error handler must last after all routes

app.use(errorMiddleware);

export default app;