import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { validateToken } from "@shared/infra/http/middlewares/validateToken";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle)

usersRoutes.patch(
    "/avatar",
    validateToken,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
)

export { usersRoutes };