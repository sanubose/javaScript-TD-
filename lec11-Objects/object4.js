let person ={
    name:"sanu",
    age:29,
    job:true,

    address:{
        country:"India",
        city:"Sitapur",
        vill:"Aant",
    },

    jobId:123,

    family:{
        mother:"Manju Bose",
        father:"S.C. Bose",
        Sister:"Smita ",
        youngSister:"Sneha",
    },

   post:"Web Developer"

}

console.log(person.family.Sister)
console.log(person["address"]["city"]);