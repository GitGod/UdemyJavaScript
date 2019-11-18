var John = {
      billValues : [124,48,268,180,42],

      calculateTip : function(){
            this.tableOfTips = [];
            this.tableOfFullAmount =[];
       for(var i=0;i<this.billValues.length;i++){
        if( this.billValues[i] < 50){
            this.tableOfTips[i]=this.billValues[i]*0.2;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        } else if(this.billValues[i] >= 50 && this.billValues[i] <= 200){
            this.tableOfTips[i]=this.billValues[i]*0.15;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        } else if(this.billValues[i] > 200)  {
            this.tableOfTips[i]=this.billValues[i]*0.1;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        }else{
            this.tableOfTips[i]='bill as bad defined'
            this.tableOfFullAmount[i]='bill as bad defined'
        }
       }
      }
}

var Mark = {
      billValues : [77,475,110,45],

      calculateTip : function(){
            this.tableOfTips = [];
            this.tableOfFullAmount =[];
       for(var i=0;i<this.billValues.length;i++){
        if( this.billValues[i] < 100){
            this.tableOfTips[i]=this.billValues[i]*0.2;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        } else if(this.billValues[i] >= 100 && this.billValues[i] <= 300){
            this.tableOfTips[i]=this.billValues[i]*0.1;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        } else if(this.billValues[i] > 300)  {
            this.tableOfTips[i]=this.billValues[i]*0.25;
            this.tableOfFullAmount[i]=this.tableOfTips[i]+this.billValues[i];
        }else{
            this.tableOfTips[i]='bill as bad defined'
            this.tableOfFullAmount[i]='bill as bad defined'
        }
       }
      }
}


function AverageTip(family){
      var sum=0;
      family.calculateTip();
for(var i=0;i<family.tableOfTips.length;i++){
sum+=family.tableOfTips[i];
}
return sum/family.tableOfTips.length
}

if(AverageTip(Mark)>AverageTip(John)){
      console.log('Mark average of tips is higher')
} else if(AverageTip(Mark)<AverageTip(John)){
      console.log('John average of tips is higher')
}else{
      console.log('John and Mark have same average of tips')
}

John.calculateTip();
console.log(AverageTip(Mark));