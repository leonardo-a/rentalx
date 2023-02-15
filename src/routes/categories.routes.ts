import { Router, Request, Response } from 'express'
import multer from 'multer'

import createCategoryController from '../modules/cars/useCases/createCategory';
import importCategoryController from '../modules/cars/useCases/importCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.get("/", (req: Request, res: Response) => {
    console.log("reloaded docker by pool");
    return listCategoriesController().handle(req, res);
});

categoriesRoutes.post("/", (req: Request, res: Response) => {
    return createCategoryController().handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController().handle(req, res);
});

export { categoriesRoutes }