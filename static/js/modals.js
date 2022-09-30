const botao1=document.getElementById('button__participantes')
const botao2=document.getElementById('button__participantes2')
const botao3=document.getElementById('button__participantes3')

function abreDiv1(){
    
    let modal= document.querySelector('.parentbox1')
    modal.style.display = 'block';
    
}

function fechaDiv1(){
    
    let modal= document.querySelector('.parentbox1')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)

function abreDiv2(){
    
    let modal= document.querySelector('.parentbox2')
    modal.style.display = 'block';
    
}

function fechaDiv2(){
    
    let modal= document.querySelector('.parentbox2')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)

function abreDiv3(){
    
    let modal= document.querySelector('.parentbox3')
    modal.style.display = 'block';
    
}

function fechaDiv3(){
    
    let modal= document.querySelector('.parentbox3')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)