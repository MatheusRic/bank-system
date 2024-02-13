import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";

const createUserService = async ({name, email, password, pix, cpf}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({email});

    if(findUser) {
        throw new AppError("this user is aready exists", 400)
    };

    const hashedPass = await hash(password, 10);

    const user = userRepository.create({
        name,
        email,
        password: hashedPass,
        pix,
        cpf
    });

    await userRepository.save(user);

    return user;
}

export default createUserService;