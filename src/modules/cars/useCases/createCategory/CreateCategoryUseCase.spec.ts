import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepositoryInMemory;

describe("Create Category", () => {

    beforeAll(() => {
        categoriesRepository = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    })

    it("Should be able to create a new Category", async () => {
        const categoryTest = {
            name: "Category name test",
            description: "Category description test"
        }

        await createCategoryUseCase.execute(categoryTest);

        const categoryCreated = await categoriesRepository.findByName(categoryTest.name);

        expect(categoryCreated).toHaveProperty("id");

    });

    it("Should not be able to create a new Category with name already used", async () => {
        expect(async () => {
            const categoryTest = {
                name: "Category name test",
                description: "Category description test"
            }
    
            await createCategoryUseCase.execute(categoryTest);
            
            // Attempt to create a duplicated category
            await createCategoryUseCase.execute(categoryTest);

        }).rejects.toBeInstanceOf(AppError);
    });
})