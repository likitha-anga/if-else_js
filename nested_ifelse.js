var a=require("readline-sync")
num1=a.questionInt("enter the number:")
num2=a.questionInt("enter the number:")
num3=a.questionInt("enter the number:")
if (num1>num2){
    if (num1>num3){
        console.log(num1,"is grater")
    }
    else {
        console.log(num2,"is lowest")
    }
}
else if(num2>num3){
    if (num2>num1){
        console.log(num2,"is grater")
    }
    else{
        console.log(num3,"is lowest")
    }
}
else{
    console.log(num3,"is grater")

}