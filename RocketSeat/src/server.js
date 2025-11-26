import http from "node:http";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.end("viva a lista de produtos");
  }
  if (method === "POST" && url === "/products") {
    const buffer = [];

    for await (const chunk of request) {
      buffer.push(chunk);
    }
    console.log(buffer);
    console.log(Buffer.concat(buffer).toString());
    return response
      .writeHead(201)
      .end("Viva a esse produto que foi cadastrado");
  }
  return response.writeHead(404).end("404 kkk");
});

server.listen(3333);
