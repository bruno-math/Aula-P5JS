let palavra; //cria a variavel GLOBAL palavra

function  palavraAleatoria() {  //cria função palavraAleatoria
  let palavras = ['Tecnologia', 'JavaScript', 'Programação', 'Alura', 'Robótica', 'P5JS','Escola'];
  
            //cria uma variavel tipo array chamado palavras

return  random(palavras); //retorna a palavra sorteada para a chamada da função
}

function  setup() {
  createCanvas(600,400); //cria a tela e define o tamanha (x,y)(largura,altura)
  palavra = palavraAleatoria(); //chama a função palabraAleatoria()
}

function  inicializaCores() {    //Cria a função inicializaCores
  background("#f5e7bd");       //cor do fundo da tela
  fill("black")                //cor da caneta/letra
  textSize(64);                 //tamanho da fonte
  textAlign(CENTER,CENTER);     //alinhamento do texto
}

function draw() {
  inicializaCores();   //chama a função InicializaCores
  let maximo = width;  //cria a variavel maximo e define o valor com a largura da tela
  let minimo=0;        //cria a variavel minimo e define o valor como 0
  let quantidade=map(mouseX,0,width,0,palavra.length); //cria a variavel quantidade
  if (quantidade<1) {
    palavra=palavraAleatoria();
  }
  let parcial=palavra.substring(0,quantidade);
  text(parcial,300,200);
  
}