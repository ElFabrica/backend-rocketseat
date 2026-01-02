import { Router } from "express";
import { DeliveryLogsController } from "@/controllers/deliveries-logs-controllers";

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const deliveryLogsRouter = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRouter.post(
  "/",

  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsController.create
);

export { deliveryLogsRouter };
