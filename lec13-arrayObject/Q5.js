// 🔥 Challenge Question — Amazon type
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 },
//     { name: "Monitor", price: 15000, quantity: 0 }
// ];

// Task: Sirf woh products nikalo jinki quantity 0 nahi hai.

// Isko solve karte waqt filter() + arrow function use karo.

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 },
    { name: "Monitor", price: 15000, quantity: 0 }
];

let cartQuantity = cart.filter((obj)=>{
      return obj.quantity !==0
})
console.log(cartQuantity)