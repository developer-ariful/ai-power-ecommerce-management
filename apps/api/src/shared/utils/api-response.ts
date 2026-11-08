import type { Response } from "express";
import { ApiResponse } from "../types/api-response.types.js";


export const sendSuccess = <T>(
    res: Response,
    message: string,
    data: T,
    statusCode = 200,
    meta: ApiResponse<T>['meta'] = null
) => {
    const response: ApiResponse<T> = {
        success: true,
        message,
        data,
        meta
    };

    return res.status(statusCode).json(response);
};

