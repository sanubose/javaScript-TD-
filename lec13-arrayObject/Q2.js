// Question 2 — Food Delivery 🍕
// let orders = [
//     { id: 101, customer: "Sanu", amount: 450, delivered: true },
//     { id: 102, customer: "Aman", amount: 800, delivered: false },
//     { id: 103, customer: "Rahul", amount: 250, delivered: true },
//     { id: 104, customer: "Neha", amount: 1200, delivered: false }
// ];

// Task: Sirf delivered orders nikalo.

let orders = [
    { id: 101, customer: "Sanu", amount: 450, delivered: true },
    { id: 102, customer: "Aman", amount: 800, delivered: false },
    { id: 103, customer: "Rahul", amount: 250, delivered: true },
    { id: 104, customer: "Neha", amount: 1200, delivered: false }
];

let finshDelivered = orders.filter((obj)=>{
  return  obj.delivered === true
})
console.log(finshDelivered )

// find total abount who get food

let totaldeliveredAmmount = finshDelivered.reduce(( sum, obj)=>{
          sum = sum+obj.amount
          return sum
},0)
console.log(totaldeliveredAmmount)
