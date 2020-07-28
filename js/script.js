/*
Código escrito por Antonio José da Silva Almeida para 
o BootCamp IGTI-FullStack 2020
*/
let color = document.querySelector('.color');
let r = document.querySelector('#r');//seleciona o input com id r
let g = document.querySelector('#g');// seleciona o input com id g
let b = document.querySelector('#b'); // selecionao input com id b
let p = document.getElementById('colorrgb');

r.addEventListener('input', changedR);// adiciona um listener o evento de movimento do mouse no input r chamando a função changeR
g.addEventListener('input', changedG);// adiciona um listener o evento de movimento do mouse no input g chamando a função changeG
b.addEventListener('input', changedB);// adiciona um listener o evento de movimento do mouse no input b chamando a função changeB

function changedR(event) {//função acionada quando uo input r muda
	document.querySelector('#rbox').value = r.value;//atualiza o valor do input rbox
	changeDivColor();
}

function changedG(event) {//função acionada quando uo input g muda
	document.querySelector('#gbox').value = g.value;//atualiza o valor do input rbox
	changeDivColor();
}

function changedB(event) {//função acionada quando uo input b muda
	document.querySelector('#bbox').value = b.value;//atualiza o valor do input rbox
	changeDivColor();
}

function changeDivColor() {
	currentColor = "rgb(" + r.value + "," + g.value + "," + b.value + ")";	//background-color: rgb(r, g, b)
	color.style.backgroundColor = currentColor;
	p.innerHTML = currentColor;
	p.style.color = currentColor;
}
