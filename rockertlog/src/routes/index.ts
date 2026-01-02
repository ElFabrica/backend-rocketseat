import { Router } from "express";

import { userRoutes } from "./users-routes";
import { sessionRoutes } from "./session-routes";
import { deliveriesRoutes } from "@/routes/deliveries-routes";
import { deliveryLogsRouter } from "./deliveries-logs-routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/deliveries-logs", deliveryLogsRouter);

export { routes };
