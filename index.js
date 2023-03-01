const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("nueva ruta");
});

routerApi(app)

app.get("/people/:id",(req, res)=> {
  const {id} = req.params;
  res.json({
    id,
    Name: "Fulano",
    orden: 23
  })
});



app.listen(port, () => {
  console.log("Escuchando en puerto " + port );
});

