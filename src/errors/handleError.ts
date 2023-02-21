import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export function handleError( err: Error, request: Request, response: Response, next: NextFunction ) {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
    } else {
        return response.status(500).json({
            message: `Internal server error - ${err}`
        });
    }
}