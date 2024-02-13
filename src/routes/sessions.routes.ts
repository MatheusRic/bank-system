import { Router } from "express";
import createSessionsController from "../controller/session.controller/session.controller";

const routes = Router();

routes.post("", createSessionsController);

export default routes;
