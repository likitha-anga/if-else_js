// var string1= "I am staying in the \"Sarjapur Campus\""
// console.log(string1)

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// let a=[]
// let i=0
// while (i<list1.length){
    // if (!list2.includes(i)){
        // a.push(i)
    // }
    // i=i+1
// }
// console.log(a)
// 
// var a=1
// var b=0
// while (a<=3){
    // a++;
    // b+=a*2;
    // console.log(b)
// }
// 

// var readline = require('readline-sync');
// var students={}
// for (let step = 0; step <3; step++){
//    var name =readline.question("Enter your name :-");
//    var marks=readline.questionInt("Enter the marks :-");
//    students[name]=marks;
// }
// console.log(students);

// let input=require("readline-sync")
// let user = input.questionInt("enter num1....")
// function greet(){
    // if (user>18){
        // return("you are eligible")
    // }
    // else{
        // return("not eligible")
    // }
// }
// console.log(greet())

var number_list = [19, 17, 12, 18, 10, 17, 14, 32, 19, 18, 12, 13, 11]
a=[]
b=[]
for(var i of number_list){
  if(!a.includes(i)){
      a.push(i)
  }
}
 
for(var j of a){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count >1){
   b.push(j);
};
}
 
console.log(b);
