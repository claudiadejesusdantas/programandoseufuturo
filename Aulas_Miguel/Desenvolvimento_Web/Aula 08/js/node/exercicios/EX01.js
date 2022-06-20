// 1 - Criar uma api com um endpoint de produtos, onde produtos seja uma lista de objetos, produto deve conter (id, nome, descricao e preco) e mostrar isso em tela.

const express = require('express')
const app = express()

app.get('/',function(request, response){
    let produto=[
        {id:0123,
        nome: "Bolo de Morango",
        descricao: "Bolo feito de massa branca com pedaços de morango.",
        preco: 55}
        
        {id:2224,
        nome: "Bolo de Chocolate",
        descricao: "Bolo feito de massa de chocolate com flocos de cacau.",
        preco: 120}
    ]
    response.send(produto)
})

app.listen(8000,function(){
    console.log("servidor up")
})
