import { getCustomRepository } from "typeorm";
import { Users } from "@models/Users";
import UserRepository from "@repositories/User.repository ";

export default class CreateUser {
  async execute(props: Users) : Promise<Users>{
    try {
      const userRepository = getCustomRepository(
        UserRepository
      );

      const alreadyExistsUser = await userRepository.find({
        where: { email: props.email },
      });
      if (alreadyExistsUser.length > 0) {
        throw new Error("Already Exists this user.");
      }

      const user = new Users(props);

      return await userRepository.save(user);

    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
