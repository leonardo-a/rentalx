import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRespository } from "@modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRespository",
    SpecificationRespository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)