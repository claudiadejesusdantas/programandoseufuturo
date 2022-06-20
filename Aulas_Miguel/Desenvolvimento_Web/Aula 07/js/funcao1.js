function somar() {
    //sem parametros
    var n1 = 5
    var n2 = 15

    console.log(`A soma entre: ${n1}+ ${n2} = ${n1+n2}`)
}

function somaComParametros(num1,num2) {
    //com parametros
    console.log(`A soma entre: ${num1}+${num2}=${num1+num2}`)
}

var subtrair = () => {
    // arrow function sem parametros
    console.log("Hello arrow function")
}

var dividir = (n1, n2) => {
    //arrow function com parametros
    console.log(n1/n2)
}

dividir(6,2)
