import http from "node:http";
import { jsonBodyHandlder } from "./middlewares/jsonBodyHandlder.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonBodyHandlder(request, response);

  if (method === "GET" && url === "/products") {
    return response.end("viva a lista de produtos");
  }
  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end(JSON.stringify(request.body));
  }
  return response.writeHead(404).end("404 kkk");
});

server.listen(3333);
