var pessoa = {
    nome: "Fulano"
    idade: 25
    altura: 1.7
}

if(pessoa.idade >= 18){
    console.log(`${pessoa.nome} você tem ${pessoa.idade} anos e pode entrar nos brinquedos +18`)
} else if ( pessoa.idade<18 && pessoa.altura >1.7){
    console.log (`${pessoa.nome} você tem ${pessoa.idade} anos e não pode entrar nos brinquedos +18 e com limite de altura`)
} else if ( pessoa.idade<18 && pessoa.altura < 1.7){
    console.log (`${pessoa.nome} você tem ${pessoa.idade} anos e não pode entrar nos brinquedos +18 e com limite de altura`)
