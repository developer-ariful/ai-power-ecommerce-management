import { NextFunction, Request, Response, Router } from "express";
import { sendSuccess } from "../shared/utils/api-response.js";
import { AppError } from "../shared/errors/app-error.js";
import { prisma } from "../lib/prisma.js";

const router = Router();

// Application Liveness Check

router.get('/', (_req: Request, res: Response) => {
    return sendSuccess(
        res,
        "API is running",
        {
            status: "healthy",
            service: "AI E-commerce API",
            timestamp: new Date().toISOString(),
        }
    )
})

router.get("/ready", async (_req: Request, res: Response, next: NextFunction) => {

    try {
        // Test PostgreSQL databse connection
        await prisma.$queryRaw`SELECT 1`;
        return sendSuccess(
            res,
            "Aplication and database are ready",
            {
                status: "ready",
                database: "connected",
                timesStamp: new Date().toISOString(),

            }
        )
    } catch (error) {
        // Log the actual error internally for debugging/monitoring
        console.error("Database readiness check failed:", error);
        // Do not expose internal database error details to the client
        return next(new AppError("Database is unavailable", 503))
    }
});

export default router;