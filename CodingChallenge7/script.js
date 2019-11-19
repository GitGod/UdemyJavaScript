
(function() {
var Question=function(question,anserws,correctAnserw){
    this.question=question;
    this.anserws=anserws;
    this.correctAnserw=correctAnserw;
    
}
Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(var i=0;i< this.anserws.length;i++){
        console.log(i +':'+ this.anserws[i]);
    }
}
Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correctAnserw) {
        console.log('Correct answer!');
Question.call(this.displayQuestion)
    } else {
        console.log('Wrong answer. Try again :)')
    }
}
var question1 = new Question('2+2',[1,3,4],2);
var question2 = new Question('3+2',[1,5,4],1);
var question3 = new Question('4+2',[1,3,6],2);
var questions=[question1,question2,question3];
var n = Math.floor(Math.random() * questions.length);


questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer)); 
            nextQuestion();
        }
    }
    
    nextQuestion();




})();

