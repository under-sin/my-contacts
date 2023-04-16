const express = require("express");

// lib que permite usar o error handler em métodos async
require("express-async-errors");

const router = require("./router");

const app = express();

// middleware que monta o body da requisição (não precisa fazer na mão)
app.use(express.json());
app.use(router);

// error handler precisa ficar depois da definação das rotas.
app.use((error, resquest, response, next) => {
  console.log("----- error handler -----");
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
