const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const abrigosRoutes = require("./routes/abrigosRoutes");

app.use("/abrigos", abrigosRoutes);


const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get('/abrigos', async (req, res) => {
  const { data, error } = await supabase
    .from('abrigos')
    .select('*');

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});

app.post('/abrigos', async (req, res) => {
  const { nome, endereco, capacidade_total, capacidade_atual } = req.body;

  const { data, error } = await supabase
    .from('abrigos')
    .insert([{ nome, endereco, capacidade_total, capacidade_atual }]);

  if (error) {
    return res.status(400).json(error);
  }

  res.status(201).json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API de abrigos funcionando 🚀");
});