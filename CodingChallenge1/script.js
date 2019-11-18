
var heightMark =1.4;//meters
var massMark=50; //kg
var heightJohn=1.5;//meters
var massJohn=56; //kg
markBMI= massMark / (heightMark*heightMark);
johnBMI = massJohn / (heightJohn*heightJohn);
var markHasGreaterBmiThanJohn = markBMI > johnBMI;
console.log('is Mark\'s BMI higher than John\'s? ' + markHasGreaterBmiThanJohn);