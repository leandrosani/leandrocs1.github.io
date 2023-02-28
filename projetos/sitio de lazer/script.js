var carrossel = document.querySelector('.carrossel');
var imagens = carrossel.querySelectorAll('img');
var indiceAtual = 0;

function mostrarProximaImagem() {
	imagens[indiceAtual].classList.remove('ativo');
	indiceAtual++;
	if (indiceAtual >= imagens.length) {
		indiceAtual = 0;
	}
	imagens[indiceAtual].classList.add('ativo');
}

var intervalo = setInterval(mostrarProximaImagem, 3000);

carrossel.addEventListener('mouseover', function() {
	clearInterval(intervalo);
});

carrossel.addEventListener('mouseout', function() {
	intervalo = setInterval(mostrarProximaImagem, 3000);
});
