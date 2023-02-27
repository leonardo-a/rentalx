import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/users",usersRoutes);
router.use("/categories",categoriesRoutes);
router.use("/specifications",specificationsRoutes);
router.use(authenticateRoutes);

export { router }