// type coersion

console.log(Boolean(0))
console.log(Boolean(" "))

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(Nan))


// turthy
let money=20;
if(money){
    console.log(" aaj to party hogi")
}else{
    console.log("chal be chutiye")
}

//falsy

let height;
if(height){
    console.log("jayega army me")
}else{
    console.log("phir agla dekh le")
}
console.log('23'+'4'+3)//2343
console.log("20"*"20")//400
console.log(2+3+4+'5')//5

console.log('23'-"10"-3)//10
