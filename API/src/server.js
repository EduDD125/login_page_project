const express = require('express');
const routes = require('./routes')
const app = express();

app.use(express.json());
app.use(routes)

app.get('/', (req, res) => {
    console.log("get endpoint at index page");
})

app.listen(3000, () => {
    console.log("conectado na porta padrão 3000")
})