var a=require("readline-sync")
num1=a.questionInt("enter the number:")
num2=a.questionInt("enter the number:")
if (num1>0 && num2>0){
    console.log(num1-num2,"substract")
    console.log(num1+num2,"addition")
    console.log(num1/num2,"division")
    console.log(num1%num2,"modules")
}
