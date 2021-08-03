class Contestant{
    constructor(){
        this.index = null;
        this.answer = "";
        this.name = null;
    }

    getCount(){
    // databaseReference.on() creates a listener which keeps listening to the gameState from
    // the database. When the gameState is changed in the database, the function passed as an
    // argument to it is executed &&
    // Note: Here the function is directly written inside the .on() listener.
    // -> databaseReference.update() will update the database reference. Here "/" refers to the
    // main database inside which gameState is created.
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
        contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
        contestantCount : count
        });
}

update(){
    var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
        name:this.name,
        answer: this.answer
    })
}

static getContestantInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data) =>{
        allContestants = data.val();
    })
}

}