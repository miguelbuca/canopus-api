import { DeleteResult, getCustomRepository } from "typeorm";
import { User } from "@models/User";
import UserRepository from "@repositories/User.repository ";

export default class RemoveUser {
  async execute(id: number | string): Promise<DeleteResult> {
    try {
      const userRepository = getCustomRepository(UserRepository);
      return await userRepository.delete(id);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
