const { response } = require('express')
const express = require('express')
const app = express()

//ENDPOINT
// app.get('/',function(request, response){
//     response.send('Olá Mundo')
// })

//ENDPOINT
app.get('/produtos', function(request, response){
    let produto = {
        id:1,
        nome:"Tapioca",
        descricao: "Tapioca muito boa"
    }    
    response.send(produto)
})

// console.log("SERVIDOR EXECUTANDO")
app.listen(8000, function(){
    console.log("Servidor executando")
})


