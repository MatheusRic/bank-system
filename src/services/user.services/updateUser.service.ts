import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";

const updateUserService = async ({email, pix, password}: IUserUpdate, id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({id});

    if(!findUser) {
        throw new AppError("User not found", 404);
    };

    await userRepository.update(id, {
        email: email ? email : findUser.email,
        pix: pix ? pix : findUser.pix,
        password: password ? await hash(password, 10) : findUser.password
    });

    const updatedUser = await userRepository.findOneBy({id})

    return updatedUser!;
}

export default updateUserService;