const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gtstp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})


app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query sao usados para(Filtros, ordenacao, paginacao,...)
// Route Params: request.params sao usados para(Identificar um recurso na alteracao ou remocao)
// Body: request.body sao (Dados para criacao ou altercao de um registro)

// MongoDB (Nao-relacional)



app.listen(3333);
