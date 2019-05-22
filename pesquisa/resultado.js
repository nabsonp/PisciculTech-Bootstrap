function exibirResultado(){
    if (window.opener.situacao) {
        document.getElementById("pesquisa").innerHTML = window.opener.busca.value;
        document.getElementById("resultados").innerHTML = ("<span><h2><a href = '../tanques/dados-tanque.html'>ID do Tanque</a></h2><h3><a href = '../tanques/tanques.html'>Tanques</a></h3><div>Espécie: <br/>Qtd peixes: <br/>Biomassa: <br/>Material: <br/>Tamanho:</div></span>"+
        "<span><h2><a href = '../epecie/caracteristicas.html'>Tambaqui</a></h2><h3><a href = '../especie.html'>Peixes</a></h3><div>Faixa de peso:<br/>Tamanho médio:    <br/>Quantidade: <br/>Biomassa: <br/>Ração/dia:</div></span>");
    }else{
        document.getElementById("pesquisa").innerHTML = window.opener.busca.value;
        document.getElementById("resultados").innerHTML = ("<h1>Nenhum resultado encontrado.</h1>");
    }
}

var busca;
var situacao;

function buscar(){
    busca = document.getElementById("campPesq");
    if ( busca.value != ""){
        if (busca.value == "Tambaqui") {
            situacao = true;
        }else{
            situacao = false;
        }
        window.open('../pesquisa/resultado.html');
    }
}