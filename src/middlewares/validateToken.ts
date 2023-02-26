import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@errors/AppError";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";

interface ITokenPayload {
    sub: string;
}

export async function validateToken(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Missing Token!", 401);
    }

    const [ _, token ] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "b8f8a082fb3661dc0c197658120d8421") as ITokenPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User doesnt exist!", 401);
        }
        
        request.user = {
            id: user_id
        };

        next();
    } catch(err) {
        throw new AppError("Token informed was invalid!", 401);
    }
}