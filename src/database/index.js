const { Client } = require("pg");

// conectando ao banco de dados
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "mycontacts",
});

client.connect();

// client.query -> retorna uma promisse
exports.query = async (query, values) => {
  // dentro  da query os unicos dados que precisamos são as rows
  const { rows } = await client.query(query, values);
  return rows;
};

// Query("SELECT * FROM contacts").then((result) => console.log(result));
