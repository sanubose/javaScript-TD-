let num= 123;
let original=num;
     let reverse=0;
    while(num!=0){
        let digit=num%10;
        reverse = reverse*10+digit;
        num = Math.floor(num/10)
    }
    if(original===reverse){
        console.log("Pelindrome")
    }else{
         console.log(" No Pelindrome")
    }