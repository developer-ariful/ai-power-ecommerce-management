import { prisma } from "../../lib/prisma.js"

export const userRepository = {
    async findById(id: number) {
        return prisma.user.findUnique({
            where: {
                id,
            }
        })
    },

    async findByEmail(email: string){
        return prisma.user.findUnique({
            where: {
                email,
            }
        })
    },

    // find all
    async findAll() {
        return prisma.user.findMany();
    },
    // Create User
    async create(data: { email: string, name?: string }) {
        return prisma.user.create({
            data
        })
    },

    // Update user
    async update(id: number, data: { email?: string, name?: string }) {
        return prisma.user.update({
            where: { id }, data,
        })
    },

    // Delete User
    async delete(id: number) {
        return prisma.user.delete({
            where: { id }
        })
    }
}