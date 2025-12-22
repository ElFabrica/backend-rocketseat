import { TablesSessionController } from "@/controllers/tables-sessions-controller";
import { Router } from "express";

const tablesSessionsRoutes = Router();
const tablesSessionController = new TablesSessionController();
tablesSessionsRoutes.post("/", tablesSessionController.create);

export { tablesSessionsRoutes };
