// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 6;

// variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

let colidiu = false

// variáveis do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponete()
  colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
  placar();
  marcaPontos();
}

function mostraBolinha(){ 
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1}
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1}
}

function mostraRaquete(x, y){
   rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 7;
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponete(){
  if (keyIsDown(87)) {
    yRaqueteOponente -= 7;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 7;
  }
}
  
function placar(){
  textAlign(CENTER)
  textSize(16)
  stroke("white");
  fill("orange");
  rect(230, 10, 40, 20);
  fill("white");
  text(meusPontos, 250, 26);
  fill("orange");
  rect(330, 10, 40, 20)
  fill("white");
  text(pontosOponente, 350, 26)
}

function marcaPontos(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  }
}






