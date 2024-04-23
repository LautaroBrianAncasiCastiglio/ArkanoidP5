//clase 2

var bloks = [
  [' ', '1', '1','1', ' ','1', ' ','1', ' ','1', ' ','1', ' ', '1'],
  ['1', ' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' '],
  [' ', '1', ' ','1', ' ','1', ' ','1', ' ','1', ' ','1', ' ', '1'],
  ['1', ' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' '],
  [' ', '1', ' ','1', ' ','1', ' ','1', ' ','1', ' ','1', ' ', '1'],
  ['1', ' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' ', '1',' '],
  [' ', '1', ' ','1', ' ','1', ' ','1', ' ','1', ' ','1', ' ', '1']
];
let fila = 50;
let columna = 50;
let bTam = 50;
let blok = [];
let distanX = [];
let distanY = [];

var posX = 200;
var posY = 400;
var velX = 5;
var velY = 5;
var dirX = 1;
var dirY = 1;
var radio = 10;

var posX2 = 300;
var posY2 = 550;
let tam = 200;
var borX = 800 - radio;
var borY = 600 - radio;

let izq = false;
let der = false;

let contador = 0;

function setup() {
  createCanvas(800, 600);
  time = millis();
  plano();
}


function draw() {
  background(125, 125, 125);
  //bolita
  fill(0, 250, 0);
  ellipse(posX, posY, radio *2);
  //plataforma
  fill(255, 0, 0);
  rect(posX2, posY2, tam, 30);

  if (mouseIsPressed == true) {velX = 10;  velY = 10;} 
  else {velX = 5;  velY = 5;}

  //rebotar con las paredes
  if (posX >= borX || posX <= radio ) {dirX = dirX * -1;}
  if (posY >= borY /*suelo*/|| posY <= radio ) {dirY = dirY * -1;}
  //barra detenerse

  //rebotar con la plataforma
  if( posY + radio >= posY2){
  if (posX >= posX2  && posX <= posX2 + tam  ) {dirY = dirY * -1;}
  if (posX >= posX2 + tam  && posX <= posX2 + tam+5 ) {dirX = dirX * -1;}
  if (posX >= posX2 -5 && posX <= posX2  ) {dirX = dirX * -1;}
  }
  
  posX = posX + dirX * velX;
  posY = posY + dirY * velY;

  if (izq==true) {posX2 = posX2 - 7;}
  if (der==true) {posX2 = posX2 + 7;}

  for (let i = 0; i < blok.length; i++) {
      blok[i].show();
    //text(distanX[i], 350, 200);
    //text(distanY[i], 400, 200);
      if(posY + radio >= distanY[i] && posY + radio <= distanY[i] +50 ){
        if (posX >= distanX[i] +2 && posX <= distanX[i] + bTam -2) {
          distanX.splice(i,1);
          distanY.splice(i,1);
          blok.splice(i,1);  
          dirY = dirY * -1;
          contador = contador + 1;
          }
        if (posX >= distanX[i] + bTam - 2 && posX <= distanX[i] + bTam ) {
          distanX.splice(i,1);
          distanY.splice(i,1);
          blok.splice(i,1);  
          dirX = dirX * -1;
          contador = contador + 1;
          }
        if (posX >= distanX[i] && posX <= distanX[i] + 2 ) {
          distanX.splice(i,1);
          distanY.splice(i,1);
          blok.splice(i,1);  
          dirX = dirX * -1;
          contador = contador + 1;
          }
        } 
  }
    //text(distanX[1], 100, 200);
    //text(distanY[1], 200, 200);
    textSize(40);
    text(contador,100,40);
}

function keyPressed() {
  if (key == "a") {izq = true;}
  if (key == "d") {der = true;}
}

function keyReleased() {
  if (key == "a") {izq= false;}
  if (key == "d") {der = false;}
}

function plano() {
  for (let c = 0; c < bloks.length; c++) {
    for (let f = 0; f < bloks[1].length; f++) {
      var lad = bloks[c][f];
      if (lad == '1') {
        let b = new Bloques(fila, columna);
        distanX.push(b.x);/*asignamos el valor X a una variable*/
        distanY.push(b.y);/*asignamos el valor Y a una variable*/
        blok.push(b);
        text(b, 100,200);
      }
      fila = fila + bTam;
    }
    fila = 50;
    columna = columna + 25;
  }
  columna = 50;
}

class Bloques {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = bTam;
  }

  show() {
    fill(225, 135, 66);
    rect(this.x, this.y, this.r, 25);
  }
}
