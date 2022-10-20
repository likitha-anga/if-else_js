var a=require("readline-sync")
ch=a.question("enter the num")
if (ch>="a" && ch<="z" || ch>="A" && ch<="Z"){
    console.log("alphabet")
}
else if (ch>="0" || ch<="9"){
    console.log("digit")
}
else{
    console.log("special charactor")
}
