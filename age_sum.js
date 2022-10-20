// 5=go to school
// 18=go to vote
// 21=car a drive
// 24=can marry
// after=legally drink


var a=require("readline-sync")
b=a.questionInt("enter your age")
if (b<=5){
    console.log("go to school")
}
else if (b<=18){
    console.log("go to vote")
}
else if (b<=21){
    console.log("car a drive")
}
else if (b<=24){
    console.log("can marry")
}
else{
    console.log("legally drink")
}