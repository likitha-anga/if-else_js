balance=10000
var a=require("readline-sync")
language=a.question("enter the language:")
language="english","hindi","telugu"
console.log("Welcome to our bank world")
pin_code=a.questionInt("enter the four digit number")
user_choose=("balance enquiry","withdraw","deposit","closing")
if (pin_code==1234){
    console.log("balance enquiry")
    console.log("withdraw")
    console.log("deposit")
    console.log("closing")
}
user_choose=a.question("enter the choose")
if (user_choose=="balance enquiry"){
    if (balance>0){
        console.log("balance")
    }
    else{
        console.log("Zero balance")
    }
}
else if(user_choose=="withdraw"){
    withdraw=a.question("enter the amount")
    if (balance>withdraw){
        console.log("sucess your amount is now:",balance-withdraw)
    }
    else{
        console.log("insuffiecient balance")
    }
}
else if (user_choose=="deposit"){
    deposit=a.questionInt("enter deposit amount")
    if (balance>0){
        total_amount=balance+deposit
        console.log(total_amount)
    }
    else{
        console.log("something wrong")
    }
}
else if (user_choose=="closing"){
    console.log("closing")
}
else{
    console.log("sorry wrong password try again")
}










