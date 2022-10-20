var a=require("readline-sync")
num1=a.questionInt("enter the number:")
num2=a.questionInt("enter the number:")
operator=a.question("enter the operator")
if (operator=="+"){
    console.log(num1+num2,"addition")
}
else if (operator=="-"){
    console.log(num1-num2,"substaction")
}
else if (operator=="*"){
    console.log(num1*num2,"multiply")
}
else if (operator=="%"){
    console.log(num1%num2,"modulus")
}
else if (operator=="/"){
    console.log(num1/num2,"division")
}
else{
    console.log(num1!=num2,"is not equal")
}