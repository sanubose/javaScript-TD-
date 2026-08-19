let num=17
let isPrime=true;

for(let i=2; i<=num; i++){
   if(num%2==0){
    isPrime=false;
    break;
   }
}

if(isPrime==true){
    console.log("Prime number")
}else{
    console.log("No-Prime")
}