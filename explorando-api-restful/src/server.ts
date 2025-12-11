import express from "express";

const PORT = 3333;

const app = express();

app.get("/x", (request, response) => {
  response.send("hello world with Express ");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
