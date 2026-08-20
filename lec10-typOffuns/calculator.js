const calculator = (a,b ,operation)=>{
           return operation (a,b)
}

 let sum = calculator(8,2 ,function(n1,n2){
         return n1+n2;
 })
 console.log(sum)

  let sub= calculator(8,2 ,function(n1,n2){
         return n1-n2;
 })
 console.log(sub)

  let multiply = calculator(8,2 ,function(n1,n2){
         return n1*n2;
 })
 console.log(multiply)

  let divied = calculator(8,2 ,function(n1,n2){
         return n1/n2;
 })
 console.log(divied)

  let mod = calculator(8,2 ,function(n1,n2){
         return n1%n2;
 })
 console.log(mod)