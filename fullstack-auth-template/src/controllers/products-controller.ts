import { Request, Response } from "express";

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response) {
    return response.json();
  }
}

export { ProductsController };
