export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { soluction } = request.body;

  database.update("tickets", id, { status: "close", soluction });

  return response.end();
}
