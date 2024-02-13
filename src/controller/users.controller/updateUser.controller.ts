import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/user.services/updateUser.service";
import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;
  const updatedUser = await updateUserService(user, id);
  return res.status(200).json({ message: "User Update", user: updatedUser });
};

export default updateUserController;
