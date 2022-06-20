// 1 - Criar três objetos com informações de pessoas contendo (nome, idade) imprimir na tela quem é o mais velho

var pessoa1 = {
    nome: "Yngrid Pão de Mel",
    idade: 16
}

var pessoa2 = {
    nome: "Isabela Faltante",
    idade: 19
}

var pessoa3 = {
    nome: "Claudia Faminta",
    idade: 28
}

if (pessoa1.idade > pessoa2.idade && pessoa1.idade > pessoa3.idade) {
    console.log("Pessoa 1 é maior!")
} 
else if ( pessoa2.idade > pessoa1.idade && pessoa2.idade > pessoa3.idade) {
    console.log("Pessoa 2 é a maior de todas!")
} 
else if (pessoa3.idade > pessoa1.idade && pessoa3.idade > pessoa2.idade) {
    console.log ("Pessoa 3 é a maior de todas!")
}