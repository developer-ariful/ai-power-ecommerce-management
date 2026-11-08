
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env.js";

const connectionString = `${env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const generatedClientPath = [ "..", "generated", "prisma", "client.js"].join("/");
const { PrismaClient } = await import(generatedClientPath);
const prisma = new PrismaClient({ adapter });

export { prisma };