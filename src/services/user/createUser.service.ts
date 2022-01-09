import { getCustomRepository } from "typeorm";
import { User } from "@models/User";
import UserRepository from "@repositories/User.repository ";

export default class CreateUser {
  async execute(props: User) : Promise<User>{
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

      const user = new User(props);

      return await userRepository.save(user);

    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
