import { SpecificationRespository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationsRepository = new SpecificationRespository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);