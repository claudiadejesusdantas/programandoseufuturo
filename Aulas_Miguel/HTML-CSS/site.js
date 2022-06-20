let express = require('express')
let site = express()

site.listen(8080, function(){
console.log("Servidor")
})

site.get('/', function(requisicao,resposta){
    resposta.send("<b>A força da mulher Margarida</b> <br> <i> ela é linda</i> ")
}
)
site.get('/sobre', function(requisicao, resposta){

}
)



