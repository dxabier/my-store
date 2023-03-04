const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("nueva ruta");
});

routerApi(app)

//midlewares deben ir depues del routing, tener en cuenta el orden en que se ejecuta
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);





app.listen(port, () => {
  console.log("Escuchando en puerto " + port );
});

