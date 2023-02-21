import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";



export class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, username, password, driver_license} = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name, 
            email, 
            username, 
            password, 
            driver_license
        });

        return response.status(201).send()
    }
}