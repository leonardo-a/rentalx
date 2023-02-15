import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


export class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute( {name, description}: IRequest ): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            // return res.status(400).json({error: `Category ${name} already exists!`})
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({name, description});
    }

}