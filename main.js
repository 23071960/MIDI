function tocaSom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas=document.querySelectorAll('.tecla');

let contador=0; 

while(contador<9){
    listaDeTeclas[0].onclick=tocaSom;
    contador= contador + 1;
    console.log(contador);
}
