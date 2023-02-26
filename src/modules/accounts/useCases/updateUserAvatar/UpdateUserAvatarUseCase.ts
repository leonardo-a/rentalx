import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IAvatarRequest {
    userId: string;
    avatarFile: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}
 
    async execute({userId, avatarFile}: IAvatarRequest) {
        const user = await this.usersRepository.findById(userId);

        if(user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`)
        }
        
        user.avatar = avatarFile;

        await this.usersRepository.create(user)
    }       
}