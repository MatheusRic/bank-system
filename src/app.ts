import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/user.routes";
import sessionsRoutes from "./routes/sessions.routes";
import transfersRoutes from "./routes/transfers.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionsRoutes);
app.use("/transfers", transfersRoutes);
app.use(handleErrorMiddleware);

export default app;
