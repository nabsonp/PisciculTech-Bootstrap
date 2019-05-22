function abrirCarac(){
	window.open('caracteristicas-especie.html', '_self');
}

function abrirCadastro(){
	window.open('cadastro-especie.html', '_self');
}

function excluir(){
	if(confirm("Dejesa excluir esta espécie?")){
		alert("Espécie excluída");
	}
}