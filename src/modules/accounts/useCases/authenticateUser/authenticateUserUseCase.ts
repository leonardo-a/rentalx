import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { IUsersRepository } from "../../repositories/IUserRepository";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

interface IAuthenticateResponse {
    user: {
        name: string;
        email: string;  
    };
    token: string;
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password} : IAuthenticateRequest): Promise<IAuthenticateResponse> {
        const user = await this.usersRepository.findByEmail(email);
        
        if(!user) {
            throw new AppError("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, "b8f8a082fb3661dc0c197658120d8421", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReponse: IAuthenticateResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReponse;
    }

}