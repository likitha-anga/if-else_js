var a = require("readline-sync")
b = a.questionInt("enter the number:")
if (b%5==0){
    console.log(b,"is divisible by 5")
}
else{
    console.log(b,"is not divisible by 5")
}