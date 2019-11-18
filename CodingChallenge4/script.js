
var Mark = {
mass:50,
height:134,
calcBMI: function(){
    this.bmi = this.mass / (this.height*this.height)
    return this.bmi;
}
}
var John = {
    mass:50,
    height:120,
    calcBMI: function(){
        this.bmi = this.mass / (this.height*this.height)
        return this.bmi;
    }
}

if(John.calcBMI>Mark.calcBMI){
    console.log('John bmi is higher')
}else if(John.calcBMI<Mark.calcBMI){
    console.log('Mark bmi is higher')
}else{
    console.log('Same BMI')
}

