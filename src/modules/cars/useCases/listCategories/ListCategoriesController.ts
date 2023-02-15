import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {

    constructor( private listCategoriesUseCase: ListCategoriesUseCase  ){}

    handle( req: Request, res: Response ): Response {
        const all = this.listCategoriesUseCase.execute();

        return res.json(all);
    }

}