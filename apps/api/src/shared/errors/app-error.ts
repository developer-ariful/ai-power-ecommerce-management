export class AppError extends Error{
    public readonly statusCode: number;
    public readonly status: string;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number){
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

        this.isOperational = true;

        (Error as ErrorConstructor & {
            captureStackTrace?: (target: object, constructor?: Function) => void;
        }).captureStackTrace?.(this, this.constructor);
    }
}