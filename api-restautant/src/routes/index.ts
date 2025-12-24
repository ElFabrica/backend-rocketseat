import { Router } from "express";
import { productRoutes } from "./products-routes";
import { tableRoutes } from "./table-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router();

routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/products", productRoutes);
routes.use("/tables", tableRoutes);
routes.use("/orders", ordersRoutes);

export { routes };
