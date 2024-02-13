import { Router } from "express";

import makeTransfersController from "../controller/transactions.controller/makeTransfers.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const routes = Router();

routes.post("", ensureAuthMiddleware, makeTransfersController);

export default routes;
