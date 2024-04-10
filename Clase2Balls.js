//clase 2
var bloks = [
  [' ', '1', ' '],
  ['1', ' ', '1'],
  [' ', '1', ' ']
];
let fila = 100;
let columna = 50;
let bTam = 100;
let bDistan;
let blok = [];
let distan = [];

var posX = 100;
var posY = 100;
var velX = 5;
var velY = 5;
var dirX = 1;
var dirY = 1;
var radio = 10;

var posX2 = 300;
var posY2 = 550;
let x = 0;
let tam = 200;
let tr =tam - (tam / 5);/*le estoy diciendo que me saque el 80 porciento de un numero*/

var borX = 800 - radio;
var borY = 600 - radio;

let izq = false;
let der = false;

function setup() {
  createCanvas(800, 600);
  time = millis();
  plano();
}

function draw() {
  background(125, 125, 125);
  let distance = dist(posX, posX, x, x);
  d = floor(distance);
  //bolita
  fill(0, 250, 0);
  ellipse(posX, posY, radio *2);
  //plataforma
  fill(255, 0, 0);
  rect(posX2, posY2, tam, 30);

  if (mouseIsPressed == true) {velX = 7;  velY = 7;} 
  else {velX = 5;  velY = 5;}

  //rebotar con las paredes
  if (posX >= borX || posX <= radio ) {dirX = dirX * -1;}
  if (posY >= borY /*suelo*/|| posY <= radio ) {dirY = dirY * -1;}
  //barra detenerse

  //rebotar con la plataforma
  if (distance <= tr && posY + radio >= posY2) {dirY = dirY * -1;}

  x = posX2 + (tam / 2);
  posX = posX + dirX * velX;
  posY = posY + dirY * velY;

  if (izq==true) {posX2 = posX2 - 5;}
  if (der==true) {posX2 = posX2 + 5;}

  text(d, 100, 200);

  for (let i = 0; i < blok.length; i++) {
    blok[i].show();}
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
  for (let c = 0; c < 3; c++) {
    for (let f = 0; f < 3; f++) {
      var lad = bloks[c][f];
      if (lad == '1') {
        //fill(255,150,20);
        //rect(fila  ,columna,  100,25);
        let b = new Bloques(fila, columna);
        blok.push(b);
      }
      fila = fila + bTam;
    }
    fila = 100;
    columna = columna + 25;
  }
  columna = 50;
}

class Bloques {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = bTam;
    this.t =bTam - (bTam / 5);
  }

  radio(dista) {
    //if (distance <= this.t && posY + radio >= posY2) {
    //  dirY = dirY * -1;
    //}
  }

  show() {
    fill(225, 135, 66);
    rect(this.x, this.y, 100, 25);
  }
}
