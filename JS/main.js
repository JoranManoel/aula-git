
var tentativas = 0
var meuLogin = "Joran"
var minhaSenha = "1234"

do{
    var user = prompt("Insira seu login")
    var pass = prompt("Insira sua senha")

    if(user == meuLogin && pass == minhaSenha){
        alert("Estou Logado!")
        tentativas = 4
    }else{
        alert("Senha ou login incorreto! Tente novamente")

        tentativas++
    }

}while(tentativas < 3)

if(tentativas == 3){
    alert("Usuário bloqueado!")
}