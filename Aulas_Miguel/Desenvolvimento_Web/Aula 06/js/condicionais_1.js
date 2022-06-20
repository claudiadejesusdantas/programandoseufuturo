//tomada de decisão

var idade = 15
var estaAcompanhado = false 

if(idade >= 18) {
    //aqui acontece alguma coisa
    console.log('Você é maior de idade e pode entrar na festa')
}
 else if( idade < 18 && estaAcompanhado == false) {
    // aqui vai acontecer algo
    console.log('Você é menor de idade e nãoestá acompanhado portanto não pode entrar na festa')
}
else if (idade<18 && estaAcompanhado == true) {
    // aqui vai acontecer algo
    console.log('Você é menor de idade e está acompanhado portanto você pode entrar na festa')
}

//var leite = false
//var massaBolo = false
//var ovo = false 
// var manteiga = false 


//if(leite == true && massaBolo == true && ovo == true && manteiga == true){
//  console.log('MÂE: Da pra fazer um bolo') 
// } else if (leite == true ll massaBolo == true ll ovo == true ll manteiga == true)
//console.log("Vó: Da pra fazer um bolo")
// } else {  
// console.log ('SEM BOLO HOJE')
// }