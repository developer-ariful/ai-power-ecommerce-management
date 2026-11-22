import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service.js";
import { sendSuccess } from "../../shared/utils/api-response.js";
import { AppError } from "../../shared/errors/app-error.js";

export const userController = {
    // Get all users
    async findAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.findAll();
            return sendSuccess(res, "Users retrieved successfully", users)
        } catch (error) {
            return next(error)
        }
    },

    // Get user by ID
    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const user = await userService.findById(id);
            if(!user){
                throw new AppError("User Not found", 404)
            }
            return sendSuccess(res, "User retrived successfully", user);
        } catch (error) {
            return next(error)
        }
    },

    // Create User
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await userService.create(req.body);
            
            return sendSuccess(res, "User created succesfully", user, 201);
        } catch (error) {
            return next(error)
        }
    },

    // Update user
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const user = await userService.update(id, req.body);

            return sendSuccess(res, "User updated successfully", user);
        } catch (error) {
            return next(error)
        }
    },

    // Delete User
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const user = await userService.delete(id);

            return sendSuccess(res, "User deleted successfully", user);
        } catch (error) {
            return next(error)
        }
    }
}