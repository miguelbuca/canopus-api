
import { Request, Response } from "express";

interface Controller<T> {
  index (request?: Request, response?: Response) : Promise<AppResponse<T>>;
  store (request: Request, response?: Response) : Promise<AppResponse<T>>;
  show (id: number) : Promise<AppResponse<T>>;
  update (
    id: number,
    request: Request,
    response?: Response
  ) : Promise<AppResponse<T>>;
  delete (id: number) : Promise<AppResponse<T>>;
}

interface AppResponse<T> {
  code?: string;
  success: boolean;
  message?: string;
  data?: T | T[] | string | object;
}