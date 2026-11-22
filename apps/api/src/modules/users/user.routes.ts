import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

// Get all users
router.get("/", userController.findAll);

// Get user by ID
router.get("/:id", userController.findById)

// Create user
router.post("/", userController.create);

// Update user
router.patch("/:id", userController.update);

//Delete user 
router.delete("/:id", userController.delete)

export default router;