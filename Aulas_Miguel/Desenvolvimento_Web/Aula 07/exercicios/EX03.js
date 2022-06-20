// Exercício
//03 - Criar uma função que receba como parâmetro o nome, sobrenome, idade e imprima na tela as informações. Ex: Seu nome completo é {nome} {sobrenome} e você tem {idade} anos.


function serHumano(pessoa){
    console.log(`Seu nome completo é ${pessoa.nome} ${pessoa.sobrenome} e você tem ${pessoa.idade} anos.`)
    // console.log (pessoa.nome)
    // console.log (pessoa.sobrenome)
    // console.log (pessoa.idade)
}

var p1={
    nome: 'Yngrid',
    sobrenome: 'Silva',
    idade:16
}

serHumano (p1)
