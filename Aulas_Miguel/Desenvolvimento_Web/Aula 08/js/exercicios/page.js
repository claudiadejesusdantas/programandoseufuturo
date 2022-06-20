let banco = []

let nomePessoa = String(prompt('Digite o seu nome: '))
let sobrenomePessoa = String(prompt('Digite o seu sobrenome: '))
let idadePessoa = Number(prompt('Digite a sua idade: '))

let pessoa = {
    nome: nomePessoa,
    sobrenome: sobrenomePessoa,
    idade: idadePessoa
}

banco.push(pessoa)
document.getElementById("main").innerHTML = `
    <div>
    <p>Seu nome é ${pessoa.nome} ${pessoa.sobrenome} </p>
    </div>
`