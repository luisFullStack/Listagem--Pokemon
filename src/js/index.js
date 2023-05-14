const botaoAlterarTema = 
document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')

const imagembotaoTrocaDeTema = document.querySelector('.imagem-botao')
botaoAlterarTema.addEventListener('click' , () => 
{  


//CONTAINS para ver se ele contei a class
const modoEscuroAtivo = body.classList.contains('modo-escuro')

 

if(modoEscuroAtivo){
    body.classList.remove('modo-escuro')

    imagembotaoTrocaDeTema.setAttribute('src' , 'src/imagens/sun.png')    
}

else{




//para ver o dado de classes tem nesssa lista usando o classLista
//ADD que dizer adicionar um elemento    
body.classList.add('modo-escuro')

imagembotaoTrocaDeTema.setAttribute('src' , 'src/imagens/moon.png')

}

})