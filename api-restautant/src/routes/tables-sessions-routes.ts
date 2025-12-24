import { TablesSessionController } from "@/controllers/tables-sessions-controller";
import { Router } from "express";

const tablesSessionsRoutes = Router();
const tablesSessionController = new TablesSessionController();
tablesSessionsRoutes.post("/", tablesSessionController.create);
tablesSessionsRoutes.get("/", tablesSessionController.index);
tablesSessionsRoutes.patch("/:id", tablesSessionController.update);

export { tablesSessionsRoutes };
