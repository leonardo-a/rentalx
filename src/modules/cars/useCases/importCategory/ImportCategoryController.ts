import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        const listCategoriesUseCase = container.resolve(ImportCategoryUseCase);

        await listCategoriesUseCase.execute(file);

        return res.send();
    }

}