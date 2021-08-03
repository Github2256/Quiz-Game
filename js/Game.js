class Game{
constructor() {}

getState(){
    var gameStateRef = database.ref('gameState');
       gameStateRef.on("value",function(data){
       gameState = data.val();
    });
// databaseReference.on() creates a listener which keeps listening to the gameState from
// the database. When the gameState is changed in the database, the function passed as an
// argument to it is executed &&
// Note: Here the function is directly written inside the .on() listener.
// -> databaseReference.update() will update the database reference. Here "/" refers to the
// main database inside which gameState is created.

 }


update(){
    database.ref('/').update({
    gameState: state
    })
}

// we created a start() function which started the game and displayed on the screen
// depending on the state of the game. 
async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      form = new Form()
      form.display();
    }
  }


play(){
    form.hide();
// here I will display timer//
contestant.getContestantInfo();

if(allContestants !== undefined){
    for(var cns in allContestants){
    debugger;
    //////////////////////////////////////////////////
    if(cns === "contestant" + contestant.index){
        fill("red");
        }else{
        fill("black");
        }
    //////////////////////////////////////////////////
    }
}

} 

}