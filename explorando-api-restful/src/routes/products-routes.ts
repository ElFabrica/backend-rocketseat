import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";

const productsRoutes = Router();

//Aqui jás um Middleware global, funciona em todas as rotas
// app.use(myMiddleware);

productsRoutes.get("/", (request, response) => {
  const { page, limit } = request.query;
  response.send(`página ${page} com limite ${limit} `);
});

//Aqui jás um Middleware local em uma rota específica
productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body;

  // response.send(`Produto ${name} custa ${price}`);
  response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };
