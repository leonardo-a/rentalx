import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
}
