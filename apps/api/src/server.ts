
import app from "./app.js";
import { env } from "./config/env.js";

// Change code similar to this:
const PORT = Number(process.env.PORT) || 4000;

app.listen(env.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check endpoint: http://localhost:${env.PORT}/api/v1/health`);
})