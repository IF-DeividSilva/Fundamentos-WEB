const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioApi = require('./api/usuario');

const saudacao = require('./saudacaoMid');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);
// Importando o módulo produto (que exporta funções) e passando o app e um texto como parâmetro
require('./api/produto')(app, ' com param!');

// Usando o middleware body-parser para interpretar o corpo da requisição como JSON ou texto ou como URL encoded
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

// usando o middleware saudacao, que é uma função que retorna outra função
app.use(saudacao('Lune Carrara'));

// Rota para clientes com parâmetros de query 
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`);
});

// Post para clientes, usando o corpo da requisição
/*app.post('/corpo', (req, res) => {
    let corpo = '';
    req.on('data', (chunk) => {
        corpo += chunk;
    });
    req.on('end', () => {
        res.send(`Corpo da requisição: ${corpo}`);
    });
});*/

// Post para clientes, usando o body-parser (req.body) para interpretar o corpo da requisição
app.post('/corpo', (req, res) => {
    res.send(`Corpo da requisição: ${JSON.stringify(req.body)}`);
});

// Rota para clientes com diferentes ids, usando parâmetros de rota
app.get('/clientes/:id' , (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});

// Rota de teste
// use atende todas as requisições que comecem com /test
// get atende apenas requisições do tipo GET
// post atende apenas requisições do tipo POST
// all atende todas as requisições, independente do tipo
// options atende apenas requisições do tipo OPTIONS (mostra quais métodos são aceitos)
app.use('/test', (req, res, next) => {
    // res.send envia uma resposta para o cliente
    //res.send('Hello World');
    
    // res.json envia uma resposta em formato JSON
    res.json({
        data: [
            {id: 1, name: 'John Doe'},
            {id: 20, name: 'Jane Agostini'},
            {id: 27, name: 'Lune Carrara'}
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })
    // next() chama o próximo middleware da rota
    next();
})

app.get('/test', (req, res) => {
    console.log('Hello World');
});

app.listen(3000, () => {
    console.log('Servidor backend nodemon rodando na porta 3000');
});