function Login() {
    var usuario = document.getElementById('input1').value
    var password = document.getElementById('input2').value

    if(usuario == 'admin' && password == "123456"){
        alert("Bem vindo ao sistema.")
    }

    else{
        alert("Credencial inválida!")
    }
}