import express from 'express';
import './database/connection';

import routes from './routes';


const app = express(); // chamando o express pra atuar 

app.use(express.json()); //para o express ler codigos json
app.use(routes); //para executar as rotas

//console.log(request.query); // mostra uma busca especifica
//console.log(request.params); // mostra o id
//console.log(request.body); // mostra tudo da requisicao

// porta do servidor que irá executar o back-end
app.listen(3333);