import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {

    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        this.importCategoryUseCase.execute(file)

        return res.send();
    }

}