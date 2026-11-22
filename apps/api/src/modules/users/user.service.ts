import { errorMiddleware } from "../../shared/errors/error.middleware.js";
import { userRepository } from "./user.repository.js"

export const userService = {
    // Find User by ID
    async findById(id: number) {
        return userRepository.findById(id)
    },

    // Find all users
    async findAll() {
        return userRepository.findAll();
    },

    // Create user
    async create(data: { email: string; name?: string }) {
       
        return userRepository.create(data);
    },

    //  Update User
    async update(id: number, data: {email?:string, name?:string}){
        return userRepository.update(id, data)
    },

    // Delete User
    async delete(id: number){
        return userRepository.delete(id)
    }
}