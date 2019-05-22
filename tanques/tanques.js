var excluir, primeira = true;

function abrirTanque(){
    if (excluir == false || primeira){
        window.open('dados-tanque.html', '_self');
    }else{
        excluir = false;
    }
}

function cadastrar(){
    window.open('cadastrar-tanque.html', '_self');
}

function excluir(){
    excluir = true;
    primeira = false;
    confirm("Deseja excluir este tanque?");
}