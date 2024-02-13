import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import User from "../../entities/user.entity";

const deleteUserService = async (id: string): Promise<String> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  await userRepository.delete(id);

  return "This user has been deleted";
};

export default deleteUserService;
