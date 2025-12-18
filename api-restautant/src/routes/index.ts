import { Router } from "express";
import { productRoutes } from "./products-routes";

const routes = Router();

routes.use(productRoutes);

export { routes };
