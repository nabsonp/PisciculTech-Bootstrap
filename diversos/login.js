function validar(){
    situacao = true;
    if (document.login.nome.value == ""){
        situacao = false;
    }
    
    if (document.login.senha.value == ""){
        situacao = false;
    }
    
    if (situacao){
        entrar();
    }else{
        alert("Preencha todos os campos.");
    }
}

function entrar(){
    if ((document.login.nome.value == "Nabson" || document.login.nome.value == "Cleydson") && document.login.senha.value == "18052016") {
        window.open("pagina-inicial.html");
    }else{
        alert("Nome e/ou senha inválido(s).");
    }
}

function foco(){
    document.login.nome.focus();
}