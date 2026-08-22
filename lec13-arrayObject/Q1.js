// Question 1 — E-commerce 🛒

// Tumhare paas products hain:

// let products = [
//     { id: 1, name: "Laptop", price: 55000, stock: true },
//     { id: 2, name: "Mouse", price: 800, stock: true },
//     { id: 3, name: "Keyboard", price: 1500, stock: false },
//     { id: 4, name: "Monitor", price: 12000, stock: true },
//     { id: 5, name: "Headphone", price: 3000, stock: false }
// ];

// Task: Aise products nikalo jo stock me available hain.

// Expected result:

// [
//     { id: 1, name: "Laptop", price: 55000, stock: true },
//     { id: 2, name: "Mouse", price: 800, stock: true },
//     { id: 4, name: "Monitor", price: 12000, stock: true }
// ]

let products = [
    { id: 1, name: "Laptop", price: 55000, stock: true },
    { id: 2, name: "Mouse", price: 800, stock: true },
    { id: 3, name: "Keyboard", price: 1500, stock: false },
    { id: 4, name: "Monitor", price: 12000, stock: true },
    { id: 5, name: "Headphone", price: 3000, stock: false }
];

let available= products.filter((obj)=>{
         return obj.stock===true
})
console.log(available)
