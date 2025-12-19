import { NextFunction, Request, Response } from "express";
import { string, z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "ok" });
    } catch (error) {
      next(error);
    }
  }
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z
          .string({ message: "name is required" })
          .trim()
          .min(6, "name is very low"),
        price: z.number().gt(0, { message: "value must be great then 0" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
