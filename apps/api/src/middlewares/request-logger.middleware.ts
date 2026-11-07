import { RequestHandler } from "express";


export const requestLogger: RequestHandler = (req, res, next) => {

    const startTime = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - startTime;

        const log={
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            duration: `${duration}ms`,
            timestamp: new Date().toISOString(),

        }

        console.log(
            `[${log.timestamp}] ${log.method} ${log.url} ${log.statusCode} ${log.duration}`,
        )
    })
    next();
} 

