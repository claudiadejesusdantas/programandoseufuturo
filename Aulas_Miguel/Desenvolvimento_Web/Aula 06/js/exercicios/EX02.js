//2 - Criar três objetos com informações de pessoas contendo (nome, altura) imprimir na tela quem é o mais alto e quem é o mais baixo
var pessoa1 = {
   nome: "yngrid",
   altura: 1.65
}

var pessoa2={
    nome: "isabela",
    altura: 1.68
}

var pessoa3 = {
    nome: "claudia",
    altura: 1.75
}

if (pessoa1.altura > pessoa2.altura && pessoa1.altura > pessoa3.altura) {
    console.log("pessoa 1 é a mais alta!")
}
else if (pessoa2.altura > pessoa1.altura && pessoa2.altura > pessoa3.idade){
    console.log ("pessoa 2 é a mais alta!")   
}
else if (pessoa3.altura > pessoa1.altura && pessoa3.altura > pessoa2.altura){
    console.log ("pessoa 3 é a mais alta!")
}