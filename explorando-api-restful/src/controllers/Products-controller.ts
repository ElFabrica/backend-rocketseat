import { Request, Response } from "express";

export class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    response.send(`página ${page} com limite ${limit} `);
  }
  create(request: Request, response: Response) {
    const { name, price } = request.body;

    // response.send(`Produto ${name} custa ${price}`);
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
