//order

let order =[
     {id:1,product:"laptop",price:50000},
     {id:2,product:"mobile",price:20000},
     {id:3,product:"headPhone",price:2000},
     {id:4,product:"Tablate",price:15000},
      {id:5,product:"coat",price:3000}

]

//find all order above to 10000

let aboveTenThousand =  order.filter((obj)=> {
                return   obj.price>10000
})
console.log(aboveTenThousand)


let abovefiveThousand =  order.filter((obj)=> {
                return   obj.price<5000
})
console.log(abovefiveThousand)

// total price

let total = order.reduce((sum,obj)=>{
        sum = sum+obj.price;
        return sum
},0)
console.log(total)

// total product list 

let list = order.map((obj)=>{
  console.log(obj.product)
})
//console.log(list)

//price sort===> decsending order .............................................a.price-b.price====>for acesending order

let sortOrder = order.sort((a, b) => {
    return b.price - a.price;
})

console.log(sortOrder);