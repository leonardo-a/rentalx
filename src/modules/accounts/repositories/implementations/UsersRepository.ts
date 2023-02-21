import { User } from "../../entities/User";

import { getRepository, Repository } from "typeorm";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUserRepository";


export class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name, 
        email, 
        username, 
        password, 
        driver_license
    }: ICreateUsersDTO): Promise<void> {

        const user = this.repository.create({
            name,
            email,
            username,
            password,
            driver_license
        });

        await this.repository.save(user);
    }
     
}