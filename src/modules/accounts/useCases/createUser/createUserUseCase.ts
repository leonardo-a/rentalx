import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {

    constructor( 
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute(createUserData: ICreateUsersDTO): Promise<void> {
        const { name, email, password, driver_license } = createUserData;

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(userAlreadyExists) {
            throw new AppError("User Already Exists!");
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        });


    }

}