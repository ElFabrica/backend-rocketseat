import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const productsRoutes = Router();
const productsController = new ProductsController();

// Adiciona middleware em todas as rotas
// productsRoutes.use(verifyUserAuthorization(["sale", "customer"]))

productsRoutes.get("/", productsController.index);
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]),
  productsController.create
);

export { productsRoutes };
