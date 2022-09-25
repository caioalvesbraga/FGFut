const botao1=document.getElementById('button__participantes')
const botao2=document.getElementById('button__participantes2')
const botao3=document.getElementById('button__participantes3')

function acao(){
    
    let modal= document.querySelector('.parentbox1')
    modal.style.display = 'block';
    
}

function fechar(){
    
    let modal= document.querySelector('.parentbox1')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)

function acao2(){
    
    let modal= document.querySelector('.parentbox2')
    modal.style.display = 'block';
    
}

function fecharp2(){
    
    let modal= document.querySelector('.parentbox2')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)

function acao3(){
    
    let modal= document.querySelector('.parentbox3')
    modal.style.display = 'block';
    
}

function fecharp3(){
    
    let modal= document.querySelector('.parentbox3')
    modal.style.display = 'none';
}

botao1.addEventListener('click',acao)