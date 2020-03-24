const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


/* 
    Tipos de parâmetros:

    Query Params: parâmetros nomeados enviados na rota após "?". Servem para filtros, paginação.
        {
        Acessa usando:
            const params = request.query
            console.log(params) // Acessa os parametros passados com o query. Ex:  ...3000/user?name=Diego
        }
    Route Params: parâmetros utilizados para idenfiticar recursos. 
        {
            const params = request.params
            console.log(params)
        }
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL,   ...
 * NoSQL: MongoDB, CouchDB, ...
 */

 /**
  * Banco de dados (formato de querys)
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * Uso do knex.js para query no banco de dados no formato query builder, te permite fazer o uso em qualquer banco de dado SQL.
  *  
  */