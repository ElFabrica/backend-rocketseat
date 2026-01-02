import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
class DeliveriesControllers {
  async create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      user_id: z.string().uuid(),
      description: z.string(),
    });

    const { user_id, description } = bodySchema.parse(request.body);

    await prisma.delivey.create({
      data: {
        userId: user_id,
        description,
      },
    });

    return response.status(201).json();
  }
  async index(request: Request, response: Response) {
    const deliveries = await prisma.delivey.findMany({
      include: {
        user: { select: { name: true, email: true } },
      },
    });
    return response.json(deliveries);
  }
}

export { DeliveriesControllers };
