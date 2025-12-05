import http from "node:http";
import { routeHandler } from "./middlewares/routeHandler.js";
import { jsonBodyHandlder } from "./middlewares/jsonBodyHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandlder(request, response);
  routeHandler(request, response);
});

server.listen(3333);
