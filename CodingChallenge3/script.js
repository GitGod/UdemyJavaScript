function calculateTip(bill){
    if( bill < 50){
            return 0.2*bill;
     } else if(bill >= 50 && bill <= 200){
        return 0.15*bill;
     }
      else if (bill > 200)  {
            return 0.1*bill;
      }else{
            return 'bill as bad defined'
    }
}
var firstBill=124;
var secondBill=48;
var thirdBill=268;

var tableOfTips = [calculateTip(firstBill),calculateTip(secondBill),calculateTip(thirdBill)]
var tableOfFullAmount =[tableOfTips[0]+firstBill,tableOfTips[1]+secondBill,tableOfTips[2]+thirdBill]
console.log(tableOfTips);
console.log(tableOfFullAmount);