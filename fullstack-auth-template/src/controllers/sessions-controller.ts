import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";

class SessionsController {
  async create(request: Request, response: Response) {
    const fakeUser = {
      id: "1",
      username: "fabrica",
      password: "123456",
      role: "customer",
    };
    const { username, password } = request.body;

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("nome de usuário e/ou senha incorreta", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn: expiresIn,
      subject: String(fakeUser.id),
    });
    return response.json({ token });
  }
}

export { SessionsController };
