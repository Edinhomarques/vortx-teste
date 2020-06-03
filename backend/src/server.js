const express = require('express');
const cors = require('cors')
const server = express();
const routes = require('./routes');
server.use(cors())
server.use(express.json());
server.use(routes);


server.listen(3001, () => console.log('Server rodando na porta 3001'));