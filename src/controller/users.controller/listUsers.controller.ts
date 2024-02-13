import { Response, Request } from "express";
import listUsersService from "../../services/user.services/listUsers.service";
import { instanceToPlain } from "class-transformer";

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();
    return res.status(200).json(instanceToPlain(users))

}

export default listUsersController;