const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("nueva ruta");
});

routerApi(app)

//midlewares deben ir depues del routing, tener en cuenta el orden en que se ejecuta
app.use(logErrors);
app.use(errorHandler);





app.listen(port, () => {
  console.log("Escuchando en puerto " + port );
});

