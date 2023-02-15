import { Router } from "express";
import { SpecificationRespository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRespository()


specificationsRoutes.post("/", (req, res) => {
   return createSpecificationController.handle(req, res)
}) 

export { specificationsRoutes }