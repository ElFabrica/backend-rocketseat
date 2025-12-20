import { knex } from "@/database/knex";
import { AppError } from "@/utils/app-error";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query;
      const products = await knex<ProductRepository>("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name");
      return response.json(products);
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

      await knex<ProductRepository>("products").insert({
        name: name,
        price: price,
      });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((id) => Number(id))
        .refine((id) => !isNaN(id), { message: "is must be a number" })
        .parse(request.params.id);

      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      });

      const { name, price } = bodySchema.parse(request.body);

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first();

      if (!product) {
        throw new AppError("Product not found");
      }

      await knex<ProductRepository>("products")
        .update({ name, price, updated_at: knex.fn.now() })
        .where({ id });

      return response.json({ message: "Success" });
    } catch (error) {
      next(error);
    }
  }
  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((id) => Number(id))
        .refine((id) => !isNaN(id), { message: "is must be a number" })
        .parse(request.params.id);

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first();

      if (!product) {
        throw new AppError("Product not found");
      }

      await knex<ProductRepository>("products").delete().where({ id });

      return response.json({ message: "Success" });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
