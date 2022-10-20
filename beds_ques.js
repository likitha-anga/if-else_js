// var c=require("readline-sync");
// b=c.questionInt("enter your beds");
// d=c.questionInt("enter your girls");
// if (b<d){
  // console.log("we need",d-b,"beds")
// }
// else if(b>d){
  // console.log("we need",b-d,"girls")
// }
// else{
  // console.log("now its equal go to another room")
// }
  // 

  // var a=require("readline-sync")
  // b=a.questionInt("enter the number:")
  // i=1
  // do{
      // console.log(b,"*",i,"=",b*i)
      // i++
  // }
  // while (i<=10)

  const n=require("readline-sync");
  var name=n.question("enter name: ")
  const store=name;
  var string=""
  for (let i=name.length-1;i>=0;i--) {
     string=string+name[i]
  }
  if (store===string) {
     console.log("its palindrome string")
  }
  else {
     console.log("it's not a palindrome string")
  }
  