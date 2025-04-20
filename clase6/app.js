const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes"); // Ajusta la ruta si usas otro nombre

app.use(express.json());
app.use("/", bookRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
