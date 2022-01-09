import { Note } from "@models/Note";
import CreateUser from "@services/user/createUser.service";
import { Request, Response } from "express";
import { AppResponse, Controller } from "src/types";

export class NoteController implements Controller<Note> {
  async index(
    request?: Request,
    response?: Response
  ): Promise<AppResponse<Note>> {
    throw new Error("Method not implemented.");
  }
  async store(
    request: Request,
    response?: Response
  ): Promise<AppResponse<Note>> {
    const { fullname, email, profile, password, access } = request.body;
    const user = new CreateUser();

    const res = user.execute(
      new User({
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
  async show(id: number): Promise<AppResponse<Note>> {
    throw new Error("Method not implemented.");
  }
  async update(
    id: number,
    request: Request,
    response?: Response
  ): Promise<AppResponse<User>> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<AppResponse<Note>> {
    throw new Error("Method not implemented.");
  }
}
