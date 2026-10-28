import express, { type Express, type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json())

app.get("/api/v1/health", (_req: Request, res:Response)=>{
    res.status(200).json({
        success: true,
        message: "AI E-Commerce API is running",
        timeStamp: new Date().toISOString()
    })
})

export default app;