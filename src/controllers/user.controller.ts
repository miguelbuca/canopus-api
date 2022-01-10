import { Users } from "@models/Users";
import CreateUser from "@services/user/createUser.service";
import { Request, Response } from "express";
import { AppResponse, Controller } from "src/types";

export class UserController implements Controller<Users> {
  async index(
    request?: Request,
    response?: Response
  ): Promise<AppResponse<Users>> {
    throw new Error("Method not implemented.");
  }
  async store(
    request: Request,
    response?: Response
  ): Promise<AppResponse<User>> {
    const { fullname, email, profile, password, access } = request.body;
    const user = new CreateUser();

    const res = user.execute
      new Users({
        fullname,
        email,
        profile,
        password,
        access
      })
    );

    return {
      success: true,
      data: res,
    };
  }
  async show(id: number): Promise<AppResponse<Users>> {
    throw new Error("Method not implemented.");
  }
  async update(
    id: number,
    request: Request,
    response?: Response
  ): Promise<AppResponse<Users>> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<AppResponse<User>> {
    throw new Error("Method not implemented.");
  }
}
