const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const abrigosRoutes = require("./routes/abrigosRoutes");

app.use("/abrigos", abrigosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});