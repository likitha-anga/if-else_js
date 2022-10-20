// var num=24
// var a="kumar"
// console.log(24/"kumar")

var a=require("readline-sync");
num1=a.questionInt("enter the 1num:");
num2=a.questionInt("enter the 2num:");
num3=a.questionInt("enter the 3num:");
if (num1>num2 && num1>num3){
        console.log("num1 is grater")
}
else if (num2>num3 && num2>num1){
    console.log("num2 is grater")
}
else{
    console.log("num3 is grater")
}


