const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://MilenaProjeto:jobsnetgama2021@cluster0.0y1r7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    //useCreateIndex: true
});

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
  console.log('Autobots vamos rodar...na porta 5000')
});
