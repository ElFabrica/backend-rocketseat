import { Request, Response } from "express";
import { AppError } from "../utils/app-error";

export class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    response.send(`página ${page} com limite ${limit} `);
  }
  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name) {
      throw new AppError("Nome do produto é obrigatório");
    }

    if (name.trim().lenght < 6) {
      throw new AppError("Nome do produto muito curto");
    }
    if (!price) {
      throw new AppError("preço do produto é obrigatório");
    }
    if (price < 0) {
      throw new AppError("preço do produto não pode ser negativo");
    }

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
