import { Router } from "express";
import createUserController from "../controller/users.controller/createUser.controller";
import listUsersController from "../controller/users.controller/listUsers.controller";
import updateUserController from "../controller/users.controller/updateUser.controller";
import deleteUserController from "../controller/users.controller/deleteUser.controller";

import ensureKeyMiddleware from "../middlewares/ensureKey.middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIdMiddleware from "../middlewares/ensureId.middleware";

const routes = Router();

routes.post("", createUserController);

routes.get("", listUsersController);

routes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIdMiddleware,
  ensureKeyMiddleware,
  updateUserController
);

routes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIdMiddleware,
  deleteUserController
);

export default routes;
