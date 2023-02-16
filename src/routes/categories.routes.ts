import { Router, Request, Response } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import importCategoryController from '../modules/cars/useCases/importCategory';



const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController().handle(req, res);
});

export { categoriesRoutes }