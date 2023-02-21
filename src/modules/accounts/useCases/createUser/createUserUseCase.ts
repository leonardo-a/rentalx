import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";

import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {

    constructor( 
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute(createUserData: ICreateUsersDTO): Promise<void> {
        // const { name, email, username, password, driver_license } = createUserData;

        await this.userRepository.create(createUserData);


    }

}