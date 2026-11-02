import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(import.meta.dirname, "../../../../.env") });

const requiredEnvVariables = ["DATABASE_URL"] as const;


for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
        throw new Error(`Missing required environment variable: ${variable}`);
    }
}

export const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: Number(process.env.API_PORT) || 4000,
    DATABASE_URL: process.env.DATABASE_URL!,
}