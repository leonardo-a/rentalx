import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }

    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name)
        
        if(specificationAlreadyExists) {
            throw new Error("Specification Already Exists");
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}