import deleteUserService from "../../services/user.services/deleteUser.service";
import { Request, Response } from "express";

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deletedUser = await deleteUserService(id);
  return res.status(204).json({ user: deletedUser });
};

export default deleteUserController;
