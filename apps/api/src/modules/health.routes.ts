import { Router } from "express";
import { sendSuccess } from "../shared/utils/api-response.js";

const router = Router();

// Application Liveness Check

router.get('/', (req, res) => {
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

export default router;