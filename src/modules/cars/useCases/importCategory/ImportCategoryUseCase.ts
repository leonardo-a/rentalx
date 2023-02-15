import fs from 'fs'
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description;
}

export class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse({})

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                console.log(line);

                const [name, description] = line;

                categories.push({
                    name, 
                    description
                })
            })
            .on("end", () => {
                fs.promises.unlink(file.path); // Remover o arquivo temporário
                resolve(categories)
            })
            .on("error", (err) => {
                console.log(err);
                reject(err);
            })
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories: IImportCategory[] = await this.loadCategories(file);
        
        categories.map( async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(name);

            if(!existCategory) {
                this.categoriesRepository.create({
                    name, description
                })
            }
        } )
    }
}