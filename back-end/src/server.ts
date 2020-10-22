import express from 'express';
import './database/connection';
import 'express-async-errors';
import cors from 'cors';

import path from 'path';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express(); // chamando o express pra atuar 

app.use(cors());
app.use(express.json()); //para o express ler codigos json
app.use(routes); //para executar as rotas
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) 
app.use(errorHandler);

// porta do servidor que irá executar o back-end
app.listen(3333);