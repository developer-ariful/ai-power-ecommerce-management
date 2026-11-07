import dotenv from "dotenv";
import path from "path";

// Load from the monorepo root or app directory correctly
dotenv.config({ path: path.resolve(import.meta.dirname, "../../../../.env") });



const requiredEnvVariables = ["DATABASE_URL"] as const;

for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
        throw new Error(`Missing required environment variable: ${variable}`);
    }
}
// process.env.DATABSE_URL=`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@postgres:5432/${process.env.POSTGRES_DB}?schema=public`

export const env = {
    NODE_ENV: process.env.NODE_ENV ?? "development",
    PORT: Number(process.env.PORT || process.env.API_PORT) || 4000,
    DATABASE_URL: process.env.DATABASE_URL!,
    CLIENT_URL: process.env.CLIENT_URL ?? "http://localhost:5173",
};

