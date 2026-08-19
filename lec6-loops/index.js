//========print just for

//for(let i=1; i<=5; i++){
//     console.log("Student :",i );
// }
// console.log("Sanu")


//============find odd and even
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log("EVEN:" ,i)
//     }else{
//         console.log("odd :",i)
//     }
// }


//Q--------------------------reverse print
// for(i=5; i>=1; i--){
//     console.log(i)
// }



//Q1------------------
// let sum =0;
// for(i=5; i>=1; i--){
//     sum=sum+i
//    console.log(sum,i)
// }
// console.log(sum)

//using break statement

// for(let i=1; i<=5; i++){
//     if(i==4){
//         break;
//     }else{
//         console.log(i)
//     }
// }

///////////usnig constinue in js
// 
/////////////////////////////using While loops=============================================================================================>

    // let i=1;
    // while(i<=5){
    //     console.log("sanubose")
    //     console.log(i)
    //      i++;
    // }
   
    // // reverse num

    // let num= 123;
    //  let reverse=0;
    // while(num!=0){
    //     let digit=num%10;
    //     reverse = reverse*10+digit;
    //     num = Math.floor(num/10)
    // }
    // console.log(reverse)


for(let i=1; i<=5; i++) {
  
  let bag = "";
  for(let j=1; j<=i; j++) {
    bag = bag + j+" ";  // Adds a star and a space to 'bag'
  }
  console.log(bag);  // Prints the full row of stars
}