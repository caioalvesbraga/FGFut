const buttonAdd1 = document.getElementById('btn-partidas-first');
const buttonAdd2 = document.getElementById('btn-partidas-second');
const buttonAdd3 = document.getElementById('btn-partidas-third');


function animacaoCerto1() {
const spanAdd1 = document.getElementById('mais__state-first');
spanAdd1.classList.toggle('active');}

function animacaoCerto2() {
const spanAdd2 = document.getElementById('mais__state-second');
spanAdd2.classList.toggle('active');}

function animacaoCerto3() {
const spanAdd3 = document.getElementById('mais__state-third');
spanAdd3.classList.toggle('active');}

buttonAdd1.addEventListener('click',animacaoCerto1);
buttonAdd2.addEventListener('click',animacaoCerto2);
buttonAdd3.addEventListener('click',animacaoCerto3);