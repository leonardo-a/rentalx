import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";

class SpecificationRespository implements ISpecificationsRepository {
    private specifications: Specification[]
    
    constructor() {
        this.specifications = [];
    }
    
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })
        
        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        return this.specifications.find( (spec) => spec.name === name )
    }
}

export { SpecificationRespository }