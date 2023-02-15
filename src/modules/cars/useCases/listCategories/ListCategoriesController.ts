import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {

    constructor( private listCategoriesUseCase: ListCategoriesUseCase  ){}

    async handle( req: Request, res: Response ): Promise<Response> {
        const all = await this.listCategoriesUseCase.execute();

        return res.json(all);
    }

}