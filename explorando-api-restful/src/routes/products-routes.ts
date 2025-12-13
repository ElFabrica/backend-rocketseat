import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";
import { ProductsController } from "../controllers/products-controller";
const productsRoutes = Router();
const productsController = new ProductsController();

//Aqui jás um Middleware global, funciona em todas as rotas
// app.use(myMiddleware);

productsRoutes.get("/", productsController.index);

//Aqui jás um Middleware local em uma rota específica
productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
