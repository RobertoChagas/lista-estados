const http = require ('http');

const listaEstados = require('./estados.json');

//chama de app ou server a const geralmente
const app = http.createServer((req, res) => {
    console.log(listaEstados);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", 'application/json');

    const respostaEmJson = JSON.stringify(listaEstados)
    res.write(respostaEmJson);

    res.end();
})

app.listen(8000, () => console.log ('Servidor iniciado na porta 8000'));