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
deliveryLogsRouter.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]),
  deliveryLogsController.show
);

export { deliveryLogsRouter };
