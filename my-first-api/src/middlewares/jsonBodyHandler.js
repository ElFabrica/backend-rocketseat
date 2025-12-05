export async function jsonBodyHandlder(request, response) {
  //Adiciona cada chunk
  const buffers = [];

  //Coleta os chumks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }
  try {
    //Concatena os chunks e converter para string. Em seguida, converte a string para JSON.
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }
  //Define o header de resposta como json
  response.setHeader("Content-Type", "application/json");
}
