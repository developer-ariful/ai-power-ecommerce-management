import { Router } from "express";
import healthRoutes from "../modules/health.routes.js";

const router = Router();

// API v1 routes
const v1Router = Router();

// Health Check Route
v1Router.use('/health', healthRoutes)

// Add module routes here in ther future.
// Example:
// v1Router.use("/products", productRoutes);
// v1Router.use("/users", userRoutes);
// v1Router.use("/orders", orderRoutes):

router.use("/v1", v1Router);

export default router;
