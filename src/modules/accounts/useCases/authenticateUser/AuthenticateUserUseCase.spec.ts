
import { AppError } from "@errors/AppError";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let usersRepository: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;


describe("Authenticate user", () => {

    beforeAll(() => {
        usersRepository = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepository);
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
    })

    it("Should be able to authenticate a user", async () => {
        const user: ICreateUsersDTO = {
            driver_license: "123456",
            email: "user@test.com",
            name: "User",
            password: "password"
        }

        await createUserUseCase.execute(user);

        const authResult = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(authResult).toHaveProperty("token");
    });
    
    it("Should not be able to authenticate non-existent user", async () => {
        expect(async () => {

            await authenticateUserUseCase.execute({
                email: "undefined@user.com",
                password: "password"
            });


        }).rejects.toBeInstanceOf(AppError)
    });

    it("Should not be able to authenticate with invalid password", async () => {
        expect(async () => {

            const user: ICreateUsersDTO = {
                driver_license: "123456",
                email: "user@test.com",
                name: "User",
                password: "password"
            }
    
            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "nonpassword"
            });


        }).rejects.toBeInstanceOf(AppError)
    })

})