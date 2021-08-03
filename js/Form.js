class Form{
    constructor(){
        // responsible for keeping account of the names players choose;
    this.input = createInput("Name");
   // this.input1 = createInput("Enter your name here!!");
    this.input2 = createInput("Enter correct answer here!!");
                   /////
    // This button is responsible for starting the game once click upon;
    this.button = createButton("Start");
                  ///////

    this.Question = createElement('h3');
    this.answer1 = createElement('h3');
    this.answer2 = createElement('h3');
    this.answer3 = createElement('h3');
    this.answer4 = createElement('h3');
    this.button1 = createButton("next");
    this.button2 = createButton("Note!!!");
    this.button3 = createButton("Submit");
    this.greeting = createElement('h3');
    this.Note = createElement('h4');
    this.text = createElement('h1');
    }
 hide() {
    this.greeting.hide();
    this.Question.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
    this.button.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.input.hide();
 // this.input1.hide();
    this.input2.hide();
    this.Note.hide();
    this.text.hide();
}

display(){
var title = createElement('h2');
    title.html("My Quiz Game.");
    title.position(150,0);
    

this.input.position(130,100);
this.button.position(200,150);
this.button1.position(0,-200);
this.button3.position(0,-200);

// functions that happen when the button play is click;
this.button.mousePressed(() => {
this.input.hide();
this.button.hide();
this.button1.position(20,350);


contestant.name = this.input.value();
contestant.answer = this.input2.value();

contestantCount+=1
contestant.index = contestantCount;
contestant.update(this.answer);
contestant.updateCount(contestantCount);

this.greeting.html("Hello" + contestant.name);
this.greeting.position(130,160);

})

// => is just a replacement for function;
// just so you know button1 is for the button "next";
 this.button1.mousePressed(() =>{
 this.greeting.hide();
 this.button1.hide();
 this.button2.position(900,100);
 this.button3.position(100,300);

 // this.input1.position(130,300);
 this.input2.position(300,300);

 this.Question.html("Question: What starts and ends with the letter 'E', but has only one letter??")
 this.Question.position(50,50);

 this.answer1.html("1:Everyone");
 this.answer1.position(50,70);
 this.answer2.html("2:Envelope");
 this.answer2.position(50,90);
 this.answer3.html("3:Estimate");
 this.answer3.position(50,110);
 this.answer4.html("4:Example");
 this.answer4.position(50,130);

 })

 this.button2.mousePressed(() =>{
 this.button2.hide();
 this.Note.html("*NOTE: If contestant answered the question correctly they are highlighted green if not red");
 this.Note.position(900,100);
})


this.button3.mousePressed(() =>{
this.input2.hide();
this.button3.hide();


if(this.input2 = this.answer1){
this.text.html(contestant.name + ": " + contestant.answer);
this.text.position(100,300);
}

})

}

}