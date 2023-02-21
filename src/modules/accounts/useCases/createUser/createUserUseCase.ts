import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";

import { hash } from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../errors/AppError";

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