const express = require('express')
const app = express()

app.use(express.json())

const bancoDeDados = []

//ENDPOINT
app.get('/', (req, res) => {
    res.send(bancoDeDados)
})

//ENDPOINT
app.post('/add-produto', (req, res) => {
    let produto = req.body

    bancoDeDados.push(produto)
    res.send('Produto adicionado')
})

app.listen(8080, () => {
    console.log("http://localhost:8080")
})