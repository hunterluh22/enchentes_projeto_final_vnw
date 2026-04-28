const db = require("./db/connection");

exports.getAbrigos = async (req, res) => {
  const result = await db.query("SELECT * FROM abrigos");
  res.json(result.rows);
};

exports.createAbrigo = async (req, res) => {
  const { nome, endereco, capacidade_total, capacidade_atual } = req.body;

  const result = await db.query(
    "INSERT INTO abrigos (nome, endereco, capacidade_total, capacidade_atual) VALUES ($1, $2, $3, $4) RETURNING *",
    [nome, endereco, capacidade_total, capacidade_atual]
  );

  res.json(result.rows[0]);
};