import express, { NextFunction, type ErrorRequestHandler, type Express, type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorMiddleware } from "./shared/errors/error.middleware.js";
import { AppError } from './shared/errors/app-error.js';
import { env } from './config/env.js';
import { requestLogger } from './middlewares/request-logger.middleware.js';
import { sendSuccess } from './shared/utils/api-response.js';
import apiRoutes from './routes/index.js';


const app: Express = express();

// 1. Security Headers
app.use(helmet());

// 2. Cors Configuration
app.use(cors({
    origin: env.CLIENT_URL,
    credentials: true,
}));

// 3. Request Logger
app.use(requestLogger);


// 4. Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// API Routes will be registerd here

app.get("/api/v1/test-error", (_req: Request, _res: Response, next: NextFunction)=>{
    // Simulate an error for testing purposes
    next(new AppError("Not found Error", 404));
});

    // Versioned API routes
    app.use("/api", apiRoutes);

// 5. Centralize error handler must last after all routes

app.use(errorMiddleware);

export default app;