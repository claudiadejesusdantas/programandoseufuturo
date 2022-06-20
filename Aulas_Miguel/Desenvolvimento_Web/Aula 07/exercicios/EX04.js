//Exercício
//04- Criar uma função que receba um objeto como parâmetro imprima as informações do objeto. O objeto deve conter (nome, idade,endereço, telefone e profissão). Sendo que telefone e endereço devem ser uma lista.
//Exemplo: ['rua x', 'rua y'] ['11965874112','9874563214']

function serHumano(pessoa){
    console.log(`Seu nome completo é ${pessoa.nome}, sua idade é ${pessoa.idade}, seu endereço é: ${pessoa.endereco}, seus telefones para contato são: ${pessoa.telefone} e sua profissão é: ${pessoa.profissao}.`)
}

var pessoa = {
    nome:"Claudia Dantas",
    idade:28,
    endereco:["Rua Matilda, 98","Rua Albuquerque de Moraes, 1900"],
    telefone:["(21)3636-2578","(15)99239-6589"],
    profissao: "RH"
}

serHumano(pessoa)
