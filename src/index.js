const express = require("express");

const router = require("./router");

const app = express();

// middleware que monta o body da requisição (não precisa fazer na mão)
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
