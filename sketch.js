var canva;
var database;
var gameState = 0;
var answer;
var allContestants;
var contestantCount;
var contestant,form,game;
var input2;
var button3;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game  = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(contestantCount == 1){
    game.update(4);
  }
if(gameState == 1){
  game.play();
}
}

