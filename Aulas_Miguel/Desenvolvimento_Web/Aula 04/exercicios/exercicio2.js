//2. Criar 1 array já iniciado com as seguintes informações (nome do avião, ano de lançamento) adicionar informações de (fabricantes e país onde foi fabricado).

var AirbusA320 = ["A320", 1984]
var Boeing737 = ["737",1964]
var DC9 = ["MacDog-80", 1999]
var Boeing777 = ["777", 2018]

AirbusA320.push("Boeing","Alemanha")
Boeing737.push("Boeing", "Estados Unidos da América")
DC9.push("McDonnel Douglas", "Estados Unidos da América")
Boeing777.push("Boeing", "Estados Unidos da América")

let AvioesLindos = [AirbusA320,Boeing737,DC9,Boeing777]
console.log(AvioesLindos)

//AvioesLindos.shift()
//AvioesLindos.pop()
//console.log(AvioesLindos)