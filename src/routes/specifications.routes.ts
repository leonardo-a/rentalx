import { Router } from "express";

import { validateToken } from "middlewares/validateToken";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(validateToken);
specificationsRoutes.post("/", createSpecificationController.handle) 

export { specificationsRoutes }