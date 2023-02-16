import { SpecificationRespository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


export default (): CreateSpecificationController => {
    const specificationsRepository = new SpecificationRespository();

    const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

    const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

    return createSpecificationController;
}