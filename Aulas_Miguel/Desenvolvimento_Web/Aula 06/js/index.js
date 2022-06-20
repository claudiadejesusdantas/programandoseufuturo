var banco = []

var nome = String(prompt("Digite seu nome: "))
var idade = Number(prompt("Digite a sua idade: "))
var telefone = String(prompt("Digite o seu telefone: "))

var pNOme = document.getElementById('nome')
var pIdade = document.getElementById('idade')
var pTelefone = document.getElementById('telefone')

var pessoa = {

    nomePessoa: nome,
    idadePessoa: idade,
    telefonePessoa: telefone
}

banco.push(pessoa)

pNome.innerHTML = `Nome: ${pessoa.nomePessoa}`
pIdade.innerHTML = `Idade: ${pessoa.idadePessoa}`
pTelefone.innerHTML = `Telefone: ${pessoa.telefonePessoa}`

//document.write(`${pessoa.nomePessoa} <br>`)
//document.write(`${(pessoa.idadePessoa)} <br>`)
//document.write(`${(pessoa.telefonePessoa)} <br>`)
