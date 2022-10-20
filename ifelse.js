// var c=require("readline-sync");
// b=c.questionInt("enter your number");
// if (b < 18) {
    // console.log("Good day");
  // }
  // else {
    // console.log("Good evening");
  // }

var c=require("readline-sync");
b=c.questionInt("enter your beds");
d=c.questionInt("enter your girls");
if (b<d){
  console.log("we need",d-b,"beds")
}
else if(b>d){
  console.log("we need",b-d,"girls")
}
else{
  console.log("now its equal go to another room")
}
  










