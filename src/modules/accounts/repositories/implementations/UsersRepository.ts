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
        id,
        name, 
        email, 
        password, 
        driver_license,
        avatar
    }: ICreateUsersDTO): Promise<void> {

        const user = this.repository.create({
            id,
            name,
            email,
            password,
            driver_license,
            avatar
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({id});
        return user;
    }
     
}